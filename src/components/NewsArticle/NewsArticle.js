import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  return (
    <div className='news-article'>
      <img className='news-image' src={props.image}/>
      <h1 className='news-headline'>{props.headline}</h1>
      <p className='news-description'>{props.description}</p>
      <button className='read-article-button'>read article</button>
    </div>
  )
}

export default NewsArticle;
