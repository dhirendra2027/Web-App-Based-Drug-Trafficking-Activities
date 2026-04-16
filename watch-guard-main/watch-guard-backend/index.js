require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");
const complaints = require("./model/complaintModel");
const ngoRouter = require("./routes/ngoRoute");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const accountSid = "process.env.accountSid";
const authToken = "process.env.authToken";
const twilioPhone = "process.env.twilioPhone";
const client = twilio(accountSid, authToken);
var otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sainianshul0712@gmail.com",
    pass: "mrtj vtni kpce jwuo",
  },
});

// Function to generate a random OTP (6 digits)
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

app.post("/callback-email", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  if (!name || !email || !phoneNumber || !message) {
    return res.status(400).send("All fields are required");
  }
  try {
    const mailOptions = {
      from: "example@gmail.com",
      to: "example@gmail.com",
      subject: "Callback Request",
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="text-align: center; color: #333; margin-bottom: 20px;">Callback Request</h2>
      <p style="color: #555;">Hello,</p>
      <p style="color: #555;">You have received a new callback request from a potential supporter. Here are the details:</p>
      <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333; border: 1px solid #ddd; background-color: #fff;">Name</td>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #fff;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333; border: 1px solid #ddd; background-color: #fff;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #fff;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333; border: 1px solid #ddd; background-color: #fff;">Phone Number</td>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #fff;">${phoneNumber}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333; border: 1px solid #ddd; background-color: #fff;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #fff;">${message}</td>
        </tr>
      </table>
      <p style="color: #555;">Please get in touch with them at your earliest convenience.</p>
      <p style="color: #333; text-align: center; margin-top: 20px;">Thank you!</p>
      <p style="font-size: 12px; color: #999; text-align: center;">This email was sent automatically by the Callback Request System.</p>
    </div>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Route to send OTP
app.post("/send-otp", (req, res) => {
  var { phone } = req.body;
  phone = phone.trim();
  phone = "+91" + phone;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required." });
  }

  const otp = generateOTP();
  otpStore[phone] = otp;
  console.log(otpStore);

  // Send OTP via SMS
  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhone,
      to: phone,
    })
    .then((message) => {
      console.log(message);
      console.log(`OTP sent: ${message.sid}`);
      res.status(200).json({ message: "OTP sent successfully." });
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      res.status(500).json({ message: "Error sending OTP." });
    });
});

// Route to verify OTP
app.post("/verify-otp", (req, res) => {
  var { phone, otp } = req.body;
  phone = phone.trim();
  phone = "+91" + phone;

  if (!phone || !otp) {
    return res
      .status(400)
      .json({ message: "Phone number and OTP are required." });
  }

  const storedOtp = otpStore[phone];
  console.log(phone, otp, storedOtp);

  if (storedOtp === otp) {
    delete otpStore[phone];
    res.status(200).json({ message: "OTP verified successfully." });
  } else {
    res.status(400).json({ message: "Invalid OTP." });
  }
});

app.post("/Complaints", async (req, res) => {
  try {
    console.log(req.body);
    await complaints.create(req.body);
    res.status(201).json({ message: "Complaint submitted successfully." });
  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ message: "Error creating complaint." });
  }
});

app.use("/ngo", ngoRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
