import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Outlet } from 'react-router-dom'

function Ngo() {
  return (
    <div className="p-6">
        <div className="relative">
        <label className="absolute right-6 top-3">
          <span className="text-zinc-600 text-xl">
            {" "}
            <IoIosSearch />
          </span>
        </label>
        <input
          type="text"
          className="w-full h-[6vh] rounded-full outline-none px-6 text-black"
          placeholder="Search..."
          name="Search"
        />
      </div>
      <div className="flex justify-between pt-8">
        <h2 className="text-4xl font-semibold">NGOS</h2>
        <a href="#" className="px-10 py-3 bg-zinc-500 rounded">
          ADD NGO
        </a>
      </div>
      <Outlet />
    </div>
  )
}

export default Ngo;