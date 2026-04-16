import React, { useContext, useEffect, useState } from "react";
import Case1 from "../assets/news/Case 1.png";
import Case2 from "../assets/news/Case 2.png";
import Case3 from "../assets/news/Case 3.png";
import Case4 from "../assets/news/Case 4.png";
import Case5 from "../assets/news/Case 5.png";
import Case6 from "../assets/news/Case 6.png";
import TopNewsCard from "./TopNewsCard";
import { newsContext } from "../utils/newsContext";
import LatestNews from "./LatestNews";
import { OrbitProgress } from "react-loading-indicators";


function News() {
  var data = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [AllNews, setAllNews] = useState([]);

  const fetchNews = async () => {
    
    setLoading(true);
    try {
      var additionalNews = [];
      for (var i = 0; i < data.length; i++) {
        if (i < 10) {
          additionalNews.push(data[i]);
        } else {
          break;
        }
      }
      data.splice(0, 10)
      setAllNews((prevNews) => [...prevNews, ...additionalNews] );
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchNews();
  },[data])
  

  const topNews = [
    {
      title: "The Bombay Drug Scandal (1980s)",
      description:
        "This involved a large-scale drug trafficking operation in Mumbai, leading to arrests and convictions of several individuals.",
      image: Case1,
    },
    {
      title: "The Jessica Lal Murder Case (1999)",
      description:
        "While not solely drug-related, the case involved allegations of drug use and consumption at a party where the murder occurred.",
      image: Case2,
    },
    {
      title: "The Bollywood Drug Busts (2020s)",
      description:
        "Several high-profile Bollywood celebrities were linked to drug use and possession, leading to investigations and legal proceedings.",
      image: Case3,
    },
    {
      title: "The Punjab Drug Crisis (Ongoing)",
      description:
        "Punjab has faced significant challenges with drug abuse, particularly synthetic opioids like heroin.",
      image: Case4,
    },
    {
      title: "The Goa Drug Trade (Ongoing)",
      description:
        "Goa’s reputation as a tourist destination has sometimes been associated with drug-related activities.",
      image: Case5,
    },
    {
      title: "The Assam Drug Menace (Ongoing)",
      description:
        "Assam has also grappled with drug-related issues, particularly in border areas, with efforts made.",
      image: Case6,
    },
  ];
  
  return (
    <div>
      <div className="min-h-[100vh] flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center text-white mt-8 mb-10 uppercase">
          Top 6 Cases Till Now{" "}
        </h2>
        <div>
          {topNews.map((news) => (
            <TopNewsCard news={news} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-center text-white mt-36 mb-10 uppercase">
          Latest News{" "}
        </h2>
        <div className="flex flex-col items-center mb-10">
          {AllNews.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center"><OrbitProgress variant="disc" color="#ffffff" size="medium" text="" textColor="" /></div>
            ) : AllNews.map((news) => (
            <LatestNews news={news}/>
          ))}

          {loading && <p>Loading...</p>}

          {!loading && !(data.length <= 0) && (
            <button className="text-xl text-blue-500 mt-10" onClick={fetchNews}>Load More</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
