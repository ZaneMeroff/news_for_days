import React from 'react';
import './Menu.css'

const Menu = props => {

  const selectNewsType = (event, newsType) => {
    props.setNewsType(newsType)
  }

  return (
    <nav>
     <h1 className='logo-title'>News Today</h1>
     <button className='nav-button' onClick={(event) => selectNewsType(event, 'local')}>Local News</button>
     <button className='nav-button' onClick={(event) => selectNewsType(event, 'technology')}>Technology</button>
     <button className='nav-button' onClick={(event) => selectNewsType(event, 'entertainment')}>Entertainment</button>
     <button className='nav-button' onClick={(event) => selectNewsType(event, 'science')}>Science</button>
     <button className='nav-button' onClick={(event) => selectNewsType(event, 'health')}>Health</button>
    </nav>
  )

}

export default Menu;
