import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav>
     <h1 className='logo-title'>News</h1>
     <button className='nav-button'>Local News</button>
     <button className='nav-button'>Technology</button>
     <button className='nav-button'>Entertainment</button>
     <button className='nav-button'>Science</button>
     <button className='nav-button'>Health</button>
    </nav>
  )

}

export default Menu;
