import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import App from '../App/App.js';
import SearchForm from '../SearchForm/SearchForm';
import './NewsContainer.css';

const NewsContainer = ({news, filterSearchResults}) => {
  return (
    <div className='news-container'>
      <SearchForm filterSearchResults={filterSearchResults}/>
      { news.length === 0 ? <div>no results found</div> : '' }
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
    </div>
  )
}

export default NewsContainer;
