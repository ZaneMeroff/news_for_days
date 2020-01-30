import React from 'react';
import './Menu.css';

const Menu = ({setNewsType, selectedNewsType}) => {

  const selectNewsType = (newsType) => {
    setNewsType(newsType);
  }

  const newsTypes = ['local', 'health', 'entertainment', 'science', 'technology'];

  return (
    <nav>
      <h1 className='logo-title'>Read all about it!</h1>
      {newsTypes.map(news => {
       return (
         <button key={Math.random()} className={news === selectedNewsType ? 'nav-button selected' : 'nav-button'} onClick={() => selectNewsType(news)}>{news.toUpperCase()}</button>
       )
      })}
    </nav>
  );
}

export default Menu;
