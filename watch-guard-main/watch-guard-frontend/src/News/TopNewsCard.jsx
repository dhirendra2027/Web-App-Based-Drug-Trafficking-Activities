import React, { useState } from 'react'

function TopNewsCard({news}) {
  const [hover, setHover] = useState(false);
  return (
    <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="w-[90vw] bg-[#313131] h-[40vh] border-b-[1px] border-zinc-500 flex justify-between items-center">
            <h2 className="w-3/4 pl-8 font-semibold text-center text-3xl flex items-center">
              {news.title}
            </h2>
            <img
              className={`h-[90%] w-[33vw] object-cover transition-all duration-[0.3s] ease-in ${
                hover ? "rotate-x-0 rounded-2xl" : "rotate-x-90"
              }`}
              src={news.image}
              alt=""
            />

            <h4 className="w-full ] text-center text-xl p-16 text-justify flex items-center">
              {news.description}
            </h4>
          </div>
  )
}

export default TopNewsCard