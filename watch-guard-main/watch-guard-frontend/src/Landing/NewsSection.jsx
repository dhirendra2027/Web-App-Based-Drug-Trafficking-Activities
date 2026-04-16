import React, { useContext, useEffect, useState } from "react";
import landingNews from "../assets/Landing/landingNews.png";
import News1 from "../assets/Landing/News/News1.jpg";
import News2 from "../assets/Landing/News/News2.jpg";
import News3 from "../assets/Landing/News/News3.jpg";
import News4 from "../assets/Landing/News/News4.jpg";
import { newsContext } from "../utils/newsContext";
import { OrbitProgress } from "react-loading-indicators";

function NewsSection() {
  let data = useContext(newsContext);
  const [news, setNews] = useState([])

  useEffect(()=>{
    data = data.filter((news , index) => index < 4 ? news : false );
    setNews(data);
  },[data]);

  return (
    <section className="h-[100vh] flex justify-center items-center">
      <img className="mix-blend-lighten w-[50vw]" src={landingNews} alt="" />
      <div className="w-[50vw]">
        <div className="bg-[#313131] h-[38vw] w-[40vw] rounded-xl flex flex-col items-center justify-between p-8 gap-4">
          <div className="w-full text-center">
          <h1 className="text-3xl font-semibold mb-2">News</h1>
          <hr className="w-full" />
          </div>
          {
            news.length === 0? (
              <div className="w-full h-full flex justify-center items-center"><OrbitProgress variant="disc" color="#ffffff" size="medium" text="" textColor="" /></div>
            ) :
            news.map((news,index) => (<div key={index} className="flex items-center w-full gap-8 pb-4">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={news.urlToImage}
                alt=""
              />
              <h2 className="text-md">
                {news.title}
              </h2>
            </div>))
          }
          {
            !(news.length === 0) && (<a href="/news" className="underline text-xl underline-offset-[5px]">
              View All
            </a>)
          }
          
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
