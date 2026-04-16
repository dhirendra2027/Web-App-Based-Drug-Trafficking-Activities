const mongoose = require("mongoose");


async function dbConnection() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
  } catch (error) {
    console.log(error.message);
  }
}

dbConnection();

mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("disconnected", () => console.log("disconnected"));

module.exports = mongoose;
