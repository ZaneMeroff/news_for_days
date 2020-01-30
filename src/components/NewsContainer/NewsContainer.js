import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import App from '../App/App.js';
import SearchForm from '../SearchForm/SearchForm';
import './NewsContainer.css';

const NewsContainer = ( {news, filterSearchResults} ) => {
  return (
    <article className='news-container'>
      <SearchForm filterSearchResults={filterSearchResults}/>
      {news.length === 0 ? <p className='error-message'>sorry, your search did not return any results</p> : ''}
      {
        news.map(article => (
        <NewsArticle
          image={article.img}
          headline={article.headline}
          description={article.description}
          url={article.url}
        />
        ))
      }
    </article>
  );
}

export default NewsContainer;
