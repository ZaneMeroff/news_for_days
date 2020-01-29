import React from 'react';
import './NewsArticle.css';

const NewsArticle = prop => {
  return (
    <div className='news-article'>
      <img className='news-image' src={prop.image}/>
      <h1 className='news-headline'>{prop.headline}</h1>
      <p className='news-description'>{prop.description}</p>
      <button className='read-article-button'>read article</button>
    </div>
  )
}

export default NewsArticle;
