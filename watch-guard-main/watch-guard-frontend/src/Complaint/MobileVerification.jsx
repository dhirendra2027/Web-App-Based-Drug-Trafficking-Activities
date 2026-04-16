import React, { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";


function MobileVerification({ handleNext }) {
  const refNumber = useRef(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendOtp = async (data) => {
    const { number } = data;
    await axios
      .post("http://localhost:3000/send-otp", { phone: number })
      .then((response) => {
        setOtpSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const varifyOtp = async (data) => {
    const { number, otp } = data;
    await axios
      .post("http://localhost:3000/verify-otp", { phone: number, otp })
      .then((response) => {
        setOtpVerified(true);
        handleNext();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="w-[75vw] h-fit rounded-lg p-6 bg-white shrink-0">
      <h2 className="text-xl font-semibold mb-6">
        It's just for confirming that you are not fake.
      </h2>
      <h4 className=" mb-6">Enter your mobile number to get OTP</h4>
      <input
        {...register("number")}
        className="w-full p-3 border-[1.8px] border-zinc-200 text-black focus:rounded-xl transistion-all duration-300 focus:outline-none focus:border-zinc-400"
        name="number"
        type="text"
        placeholder="Enter your mobile number"
        required
      />
      <div className={`${!otpSent ? "hidden" : "block"}`}>
        <h4 className="my-6">Enter OTP (One Time Password)</h4>
        <input
          {...register("otp")}
          className="w-full p-3 border-[1.8px] border-zinc-200 text-black focus:rounded-xl transistion-all duration-300 focus:outline-none focus:border-zinc-400"
          type="text"
          name="otp"
          placeholder="Enter OTP"
          required
        />
      </div>
      <input
        onClick={handleSubmit((data) =>
          !otpSent ? sendOtp(data) : varifyOtp(data)
        )}
        type="button"
        value={otpVerified ? "Verfied" : !otpSent ? "Send Otp" : "Varify Otp"}
        className={`${
          otpVerified ? "bg-green-500" : "bg-blue-500"
        } px-8 py-2 mt-8 rounded text-white`}
        disabled={otpVerified}
      />
      <input
        onClick={handleNext}
        type="button"
        value="          "
        className={`px-8 py-2 mt-8 rounded text-white`}
      />
    </form>
  );
}

export default MobileVerification;
