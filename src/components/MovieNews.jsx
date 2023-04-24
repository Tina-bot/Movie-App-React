import React from 'react';

const MovieNews = ({ news }) => {
  return (
    <div className="movie-news">
      <img src={news.image} alt="Movie News" />
        <div className="movie-news-text">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <a href="#"> Read More» </a>
        </div>
    </div>
  );
};

export default MovieNews;
