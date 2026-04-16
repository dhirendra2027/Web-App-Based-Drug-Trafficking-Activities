import React from "react";
import { useNavigate } from "react-router-dom";

function NgoCard({ngo}) {
    const navigate = useNavigate();
    const id = ngo.id;
  return (
    <div onClick={()=>{navigate(`/ngo/${id}`)}}
      className="bg-[#313131] p-6 rounded-lg shadow-lg w-[31%] h-[70vh] text-white flex-shrink-0 flex flex-col justify-between">
      <img
        src={ngo.imageUrl}
        alt={ngo.name}
        className="rounded-lg mb-4 w-full h-3/5 object-cover"
      />
      <h3 className="text-xl font-bold">{ngo.name}</h3>
      <p className="text-sm my-2">{ngo.description.slice(0 , 180)}...</p>
      <button className="bg-[#4FA9D0] text-white py-2 px-4 rounded-md">
        Contact
      </button>
    </div>
  );
}

export default NgoCard;
