import React from 'react';
import landingIMG from "../assets/Landing/landingIMG.gif";


function LandingSection() {
  return (
    <section className=" w-full relative">
        <div className="absolute w-28 h-28 bottom-0 right-0 z-[99] bg-[#151515]"></div>
        <div className="absolute w-52 h-28 bottom-0 left-0 z-[99] bg-[#151515]"></div>
        <img
          className="w-full h-[95vh] object-cover opacity-50 opacity-50 "
          src={landingIMG}
          alt=""
        />
        <div className="w-full h-full absolute bottom-0 pb-10 flex flex-col items-center justify-end">
          <h1 className="text-center text-5xl pb-4 font-semibold">
            Join us in safeguarding our communities.
          </h1>
          <h1 className="text-center text-4xl font-semibold">
            Report. Learn. Protext.
          </h1>
          <button className="bg-[#4FA9D0] px-10 py-2 rounded-full mt-4">
            Know More
          </button>
        </div>
      </section>
  )
}

export default LandingSection