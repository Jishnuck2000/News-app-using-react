import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Nab from "../Nab";
function Home() {
  const [news, setNews] = useState({
    articles: [],
  });
  const [news1, setNews1] = useState({
    articles: [],
  });
  useEffect(() => {
    const Url =
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=890a15c2ee7349baae46f601fd5b0172";
    axios
      .get(Url)
      .then((data) => {
        console.log(data.data);
        setNews(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=890a15c2ee7349baae46f601fd5b0172";
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setNews1(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <Nab/>
              
             
             
        
              
           


      <div class="ticker-wrap">
        <div class="ticker">
          {news.articles.map((news) => (
            <div class="ticker__item">{news.title}</div>
          ))}
        </div>
      </div>

      <div className="body">
        <div className="content">
          {news1.articles.map((item1) => (
            <div className="cards">
              <img src={item1.urlToImage} alt="</>" />
              {item1.title}
            </div>
          ))}
          {news.articles.map((item) => (
            <div className="cards">
              <img src={item.urlToImage} alt="</>" />
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
