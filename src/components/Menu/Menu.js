import React from 'react';
import './Menu.css'

const Menu = props => {

  const selectNewsType = (newsType) => {
    props.setNewsType(newsType)
  }

  const newsTypes = ['local', 'health', 'entertainment', 'science', 'technology'];

  return (
    <nav>
     <h1 className='logo-title'>Read all about it!</h1>
     {newsTypes.map(news => {
       return (
         <button className={news === props.selectedNewsType ? 'nav-button selected' : 'nav-button'} onClick={() => selectNewsType(news)}>{news.toUpperCase()}</button>
        )
     })}
    </nav>
  )
}

export default Menu;
