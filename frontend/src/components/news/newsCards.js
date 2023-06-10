import React from 'react';

const NewsCard = ({ title, description, createdAt }) => {
  const getTimeDifference = (createdTime) => {
    const currentTime = new Date();
    const difference = currentTime - createdTime;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) {
      return 'Less than an hour ago';
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  };

  const formattedTime = getTimeDifference(new Date(createdAt));

  return (
    <div className="news-card">
      <div className="news-content">
        <h2 className='heading'>{title}</h2>
        <div className='description'><p className='desc'>{description}</p></div>
        <p className='timestamp'>{formattedTime}</p>
        <div className='btn'>
          <a className='btn-text' href='newsBlog2.html'>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;