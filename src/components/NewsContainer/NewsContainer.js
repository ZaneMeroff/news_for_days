import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import App from '../App/App.js';
import SearchForm from '../SearchForm/SearchForm';
import './NewsContainer.css';

const NewsContainer = props => {
  return (
    <div className='news-container'>
      <SearchForm />
      {
        props.localNews.map(article => (
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
