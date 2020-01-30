import React from 'react';
import './NewsArticle.css';

const NewsArticle = ( {image, headline, description, url} ) => {
  return (
    <div className='news-article'>
      <img className='news-image' src={image}/>
      <h1 className='news-headline'>{headline}</h1>
      <p className='news-description'>{description}</p>
      <button className='read-article-button'>
        <a href={url} target='_blank' >read article</a>
      </button>
    </div>
  );
}

export default NewsArticle;
