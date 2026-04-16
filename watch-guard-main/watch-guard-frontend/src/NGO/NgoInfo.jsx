import React, { useEffect, useState } from "react";
import Img1 from "../assets/Ngo/Img1.jpg";
import Img2 from "../assets/Ngo/Img2.jpg";
import Img3 from "../assets/Ngo/Img3.jpg";
import Main from "../assets/Ngo/Main.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function NgoInfo() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const id = Number(useParams().id);
  const [ngos, setNgos] = useState([]);
  const [ngo, setNgo] = useState(null);
  async function fetchNgos() {
    await axios
      .get("http://localhost:3000/ngo")
      .then((response) => {
        setNgos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function callbackRequest(data) {
    const response = await axios.post("http://localhost:3000/callback-email" , data);
    if(response.status === 200){
      return alert("Callback request sent successfully!");
    }
    alert("There is some error in sending callback request");
  }

  useEffect(() => {
    fetchNgos();
  }, []);

  useEffect(() => {
    setNgo(()=>{
      return ngos.find((ngo) => ngo.id === id);
    });
  }, [ngos]);

  const [translate, setTranslate] = useState(0);
  let extra = 1;
  const handleRightTranslate = () => {
    setTranslate((translate) => {
      return translate < 2280 ? translate + 1139 + extra : 0;
    });
    extra < 2 ? extra + 1 : 0;
  };
  const handleLeftTranslate = () => {
    setTranslate((translate) => {
      return translate > 0 ? translate - 1139 - extra : 2280;
    });
    extra > 0 ? extra - 1 : 2;
  };
  return (
    (ngo) ? (<div className="flex flex-col py-10 justify-between items-center gap-6">
      <h1 className="text-4xl">{ngo.name}</h1>
      <div className="w-full">
        <img className="w-full" src={ngo.imageUrl} alt="" />
        <div className="w-full flex justify-between p-10 bg-[#313131]">
          <div className="px-10 py-4 min-w-[15vw] text-center w-fit rounded-full bg-[#151515]">
            {ngo.contact}
          </div>
          <a href={ngo.website} className="px-10 py-4 min-w-[15vw] text-center w-fit rounded-full bg-[#151515]">
            Website
          </a>
          <div className="px-10 py-4 min-w-[15vw] text-center w-fit rounded-full bg-[#151515]">
            {ngo.reviews}
          </div>
          <div className="px-10 py-4 min-w-[15vw] text-center w-fit rounded-full bg-[#151515]">
            {ngo.price}
          </div>
        </div>
        <div className="py-10 px-20">
          <h2 className="text-3xl font-semibold">{ngo.tagLine}</h2>
          <p className="pt-5 text-justify pb-5">{ngo.description}</p>
          <a className="text-blue-500" href={ngo.website} target="_blank">
            Learn More
          </a>
        </div>

        {/* SlideShow */}
        <div className="relative">
          <img
            className="w-full h-screen blur-md"
            src={ngo.imageUrl}
            alt=""
          />
          <div className="absolute top-0 w-full h-screen flex justify-center items-center">
            <div className="w-3/4 h-3/4 rounded-xl flex overflow-hidden">
              <motion.div
                animate={{ x: -translate }}
                className={`transform-all ease-in-out duration-500 flex `}>
                {ngo.view.map((image)=>{
                  return <img
                    key={image}
                    className=" w-full h-full object-cover shrink-0"
                    src={image}
                    alt=""
                  />
                })}
              </motion.div>
              <span className="absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
                <span
                  onClick={() => {
                    handleLeftTranslate();
                  }}
                  className=" bg-[#dadada8b] w-20 h-10 rounded-full flex justify-center items-center">
                  <FaArrowLeftLong />
                </span>
                <span
                  onClick={() => {
                    handleRightTranslate();
                  }}
                  className=" bg-[#dadada8b] w-20 h-10 rounded-full flex justify-center items-center">
                  <FaArrowRightLong />
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Request a callback */}
        <div className="w-full p-16">
          <div className="w-[50vw] bg-[#3D3D41] rounded-xl mx-auto">
            <h2 className="py-4 px-8 text-2xl font-semibold">
              Request A Callback
            </h2>
            <div className="min-h-[40vh] w-full bg-[#313131] rounded-xl">
              <form action="" className="pb-4" onSubmit={handleSubmit(data => callbackRequest(data))}>
                <div className="flex justify-between w-full gap-4 p-4">
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="name">Name</label>
                    <input {...register("name")}
                      type="text"
                      name="name"
                      className=" ouline-none border-zinc-600 border-2 rounded-xl py-2 bg-[#2D2E3C50]"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="email">Email</label>
                    <input
                    {...register("email")}
                      type="text"
                      name="email"
                      className=" ouline-none border-zinc-600 border-2 rounded-xl py-2 bg-[#2D2E3C50]"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-full gap-4 p-4">
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                    {...register("phoneNumber")}
                      type="text"
                      name="phoneNumber"
                      className=" ouline-none border-zinc-600 border-2 rounded-xl py-2 bg-[#2D2E3C50]"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="message">Message</label>
                    <input
                    {...register("message")}
                      type="text"
                      name="message"
                      className=" ouline-none border-zinc-600 border-2 rounded-xl py-2 bg-[#2D2E3C50]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="px-8 py-2 bg-green-500 rounded-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>) : <h1>Loading ...</h1>
  );
}

export default NgoInfo;
