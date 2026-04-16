import React , { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const newsContext = createContext(null);

const NewsContext = (prop) => {
  const [data, setData] = useState([]);


    async function getAllNews(){
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=drug%20trafficking&apiKey=3dbd3151bb984dc9b479ce65f84fbe49`
        );
    
        var articles = response.data.articles;
        
        const drugKeywords = [
          "drug", 
          "cocaine", 
          "heroin", 
          "meth", 
          "narcotic", 
          "opioid", 
          "amphetamine", 
          "marijuana", 
          "cannabis", 
          "ecstasy", 
          "fentanyl"
        ];
        
        const formatDate = (isoString) => {
          const date = new Date(isoString);
          return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',  
            day: 'numeric', 
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          });
        };
    
        articles = articles.filter((article) => {
          if (article.title === "[Removed]" || article.urlToImage === "[Removed]") {
            return false; 
          }
    
          const containsKeyword = drugKeywords.some(keyword => 
            article.title.toLowerCase().includes(keyword.toLowerCase())
          );
        
          if (!containsKeyword) {
            return false;
          }
    
          article.publishedAt = formatDate(article.publishedAt);
        
          return true;
        });
        setData(articles);
      }
    
      useEffect(() => {
          getAllNews();
        },[]);

    return (
    <>
    <newsContext.Provider value={data}>
        {prop.children}
    </newsContext.Provider>
    </>
  )
}

export default NewsContext