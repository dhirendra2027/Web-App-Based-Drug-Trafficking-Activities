import React, { useEffect, useState } from "react";
import NGO1 from "../assets/Landing/Ngo/NGO 1.png";
import NGO2 from "../assets/Landing/Ngo/NGO 2.png";
import NGO3 from "../assets/Landing/Ngo/NGO 3.png";
import { GoArrowRight , GoArrowLeft , GoArrowUpRight } from "react-icons/go";
import NgoCard from "../NgoCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function NgoSection() {
  const navigate = useNavigate();
  const ngoData = [
    {
      name: "Alpha Healing Center",
      description:
        "Alpha Healing Center is one of the best rehab centres in India offering individualized plans for a range of addiction-related problems.",
      imageUrl: NGO1,
    },
    {
      name: "Lotus Wellness",
      description:
        "Lotus is a modern residential treatment centre and mental health institution, unlike traditional rehab centres.",
      imageUrl: NGO2,
    },
    {
      name: "Abhasa Rehabilitation",
      description:
        "BHASA Rehabilitation and Wellness Home offers a personalized approach to recovery that transcends the norm.",
      imageUrl: NGO3,
    },
    {
      name: "Wellness Retreat",
      description:
        "Wellness Retreat provides holistic healing for addiction and mental health issues.",
      imageUrl: NGO1,
    },
    {
      name: "Healing Path",
      description:
        "Healing Path offers extensive therapy programs tailored to individual needs.",
      imageUrl: NGO2,
    },
    {
      name: "New Hope Center",
      description:
        "New Hope Center provides a compassionate approach to addiction recovery and rehabilitation.",
      imageUrl: NGO3,
    },
  ];
  const [ngos, setNgos] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    fetchNgos();
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, [ngos]);


  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = ngos.length;
  const cardsToShow = 3;

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? totalCards - cardsToShow : currentIndex - 1);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex >= totalCards - cardsToShow;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };
  if(loaded){
      return <section className="min-h-[120vh] flex items-center justify-center">
      <div className="max-w-screen mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          NGO's
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsToShow
                }%)`,
              }}>
              <div className="flex gap-10 pl-5">
              {ngos.map((ngo, index) => (
                <NgoCard ngo={ngo}/>
              ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute -bottom-24 w-full flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-300">
              <span className="text-4xl">
                <GoArrowLeft />
              </span>
            </button>
            <button
              onClick={() => navigate("/ngo")}
              className="py-4 px-10 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-300">
              <span className="text-4xl">
                <GoArrowUpRight />
              </span>
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-300">
              <span className="text-4xl">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    }
    else{
      return <div>Loading...</div>
    };
}

export default NgoSection;
