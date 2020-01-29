import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search-form-container'>
     <input className='search-input' placeholder='search for articles here...'></input>
     <button className='search-button'>search</button>
    </section>
  )

}

export default SearchForm;
