import React from 'react';
import VideoThumbnail from "../assets/Landing/Info/VideoThumbnail.png";
import { FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import compl from "../assets/Landing//Info/compl.png";
import compr from "../assets/Landing//Info/compr.png";
import facel from "../assets/Landing//Info/facel.png";
import facer from "../assets/Landing//Info/facer.png";

function InfoSection() {
  return (
    <section className="min-h-[100vh] w-full px-4 pt-10">
        <div className="w-full h-[75vh] flex">
          <div className="w-1/2 h-full relative">
            <img
              src={VideoThumbnail}
              alt=""
              className="w-full h-full object-cover object-top blur-[1.5px] mix-blend-lighten"
            />
            <div className="w-28 h-28 bg-[#4FA9D0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full flex items-center justify-center">
              <span className="text-3xl">
                <FaPlay />
              </span>
            </div>
          </div>
          <div className="w-[50vw] h-full flex items-center justify-center">
            <span className="bg-white h-52 rounded-full overflow-hidden shadow-lg hover:shadow-white transform-all duration-300">
              <span className="inline-block hover:-translate-y-[50%] transform-all duration-300 ">
                <span className="text-6xl text-black flex items-center justify-center rounded-full w-52 h-52 bg-white inline-block">
                  <GoArrowUpRight />
                </span>
                <a
                  href="/info"
                  className="text-xl font-semibold text-black flex items-center justify-center rounded-full w-52 h-52 bg-white inline-block">
                  Know More
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="text-4xl pt-10 font-bold">
          <h2 className="text-end pr-[25vw] pb-6">
            Everything You Need To Know About{" "}
          </h2>
          <h2 className="text-start pl-[25vw]">
            Drugs Business And It’s Effects .
          </h2>
        </div>

        <div className="min-h-[100vh] px-10 pt-10">
          <div className="flex justify-between">
            <div className=" h-full mt-10 relative flex justify-center">
              <img
                className="pt-72 mix-blend-lighten blur-[1.5px] w-[30vw]"
                src={compl}
                alt=""
              />
              <img
                className="blur-[1.5px] absolute top-0 left-[50%] w-[20vw]"
                src={facel}
                alt=""
              />
            </div>
            <div className=" h-full mt-10 relative flex justify-center">
              <img
                className="pt-72 mix-blend-lighten blur-[1.5px] w-[30vw]"
                src={compr}
                alt=""
              />
              <img
                className="blur-[1.5px] absolute top-0 right-[50%] w-[20vw]"
                src={facer}
                alt=""
              />
            </div>
          </div>
          <div className="text-4xl pt-4 font-bold">
            <h2 className="text-start pl-[20vw] pb-2">
              Don't let the craving control you.
            </h2>
            <h2 className="text-end pr-[25vw]">
              You have the strength to overcome it.
            </h2>
          </div>
        </div>
      </section>
  )
}

export default InfoSection