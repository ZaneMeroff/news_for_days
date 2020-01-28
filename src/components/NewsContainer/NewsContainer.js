import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import App from '../App/App.js';
import './NewsContainer.css';

const NewsContainer = prop => {
  return (
    <div className='news-container'>
      {
        prop.localNews.map(article => (
        <NewsArticle
          image={article.img}
          headline={article.headline}
          description={article.description}
        />
        ))
      }
    </div>
  )
}

export default NewsContainer;
