import React from 'react';
import NewsCard from './newsCards';

const NewsList = () => {
  // Dummy news data for testing
  const newsData = [
    {
      id: 1,
      image: './digiScholarimg.png',
      title: 'News Title 1',
      description: 'News Description 1',
      createdById: 123,
      createdAt: '2023-06-01T10:30:00Z',
      updatedAt: '2023-06-01T12:45:00Z',
    },
    {
      id: 2,
      image: './digiScholarimg.png',
      title: 'News Title 2',
      description: 'News Description 2',
      createdById: 456,
      createdAt: '2023-06-02T09:15:00Z',
      updatedAt: '2023-06-02T11:20:00Z',
    },
    {
      id: 3,
      image: './digiScholarimg.png',
      title: 'News Title 3',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      createdById: 789,
      createdAt: '2023-06-03T15:30:00Z',
      updatedAt: '2023-06-03T17:55:00Z',
    },
    // Add more news data as needed
  ];

  return (
    <div className="news-list">
      {newsData.map((news) => (
        <NewsCard
          key={news.id}
          image={news.image}
          title={news.title}
          description={news.description}
          createdAt={news.createdAt}
        />
      ))}
    </div>
  );
};

export default NewsList;
