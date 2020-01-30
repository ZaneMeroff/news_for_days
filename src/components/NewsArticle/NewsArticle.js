import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({image, headline, description, url}) => {
  return (
    <div className='news-article'>
      <img className='news-image' src={image}/>
      <h1 className='news-headline'>{headline}</h1>
      <p className='news-description'>{description}</p>
      <a href={url} target='_blank' className='read-article-button'>read article</a>
    </div>
  )
}

export default NewsArticle;
