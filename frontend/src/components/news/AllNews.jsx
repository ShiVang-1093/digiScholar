import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const AllNews = () => {
  // Dummy news data for testing
  const [data, setData] = useState();
  const getNewsData = async () => {
    const response = await fetch('http://localhost:5000/news');
    const data = await response.json();
    console.log("Data is : ", data);
    setData(data.news);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <>
        <div className="news-box">
          <center>
            <div className="news-title" style={{ backgroundColor: "#E3F3F9" }}>
              <center>
                <h1>News</h1>
                <p>Stay current with all  the latest scholarships , applications and more.</p>
              </center>
            </div>
          </center>
          <div className="news-list">
            {data.map((news) => (
              <NewsCard
                id={news._id}
                image={news.image}
                title={news.title}
                description={news.description}
                createdAt={news.createdAt}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default AllNews;
