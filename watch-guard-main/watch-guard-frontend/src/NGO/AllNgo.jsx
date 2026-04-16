import React, { useEffect, useState } from "react";
import NGO1 from "../assets/Landing/Ngo/NGO 1.png";
import NGO2 from "../assets/Landing/Ngo/NGO 2.png";
import NGO3 from "../assets/Landing/Ngo/NGO 3.png";
import NgoCard from "../NgoCard";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllNgo() {
  const [ngos, setNgos] = useState([]);
  const type = useParams().type;
  console.log(type);
  async function fetchNgos() {
    await axios
      .get("http://localhost:3000/ngo")
      .then((response) => {
        console.log(response.data);
        setNgos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchNgos();
  }, []);

  useEffect(() => {
    console.log(ngos);
  }, [ngos]);

  return (
    <div>
      <div className="flex justify-between mt-10">
        <h3 className="text-2xl">{type}</h3>
      </div>
      <hr className="w-full" />
      <div className="relative pt-10">
        <div className="overflow-x-auto scrollbar-hide">
          
            {type === "free" ? (
              <div className="flex gap-8 flex-wrap ">
                {ngos
                  .filter((ngo) => ngo.price === "Free Services")
                  .map((ngo, index) => (
                    <NgoCard ngo={ngo} key={index} />
                  ))}
                {ngos.filter((ngo) => ngo.price !== "Free Services").length ===
                  0 && <h1>No Free NGO</h1>}
              </div>
            ) : (
              <div className="flex gap-8 flex-wrap ">
                {ngos
                  .filter((ngo) => ngo.price !== "Free Services")
                  .map((ngo, index) => (
                    <NgoCard ngo={ngo} key={index} />
                  ))}
                {ngos.filter((ngo) => ngo.price === "Free Services").length ===
                  0 && <h1>No Free NGO</h1>}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default AllNgo;
