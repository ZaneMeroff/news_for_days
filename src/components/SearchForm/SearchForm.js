import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSearchChange = event => {
    this.setState({query: event.target.value})
  }

  render() {
    return (
    <section className='search-form-container'>
     <input className='search-input' onChange={this.onSearchChange} placeholder='search for articles here...'></input>
     <button onClick={() => this.props.filterSearchResults(this.state.query)} className='search-button'>search</button>
    </section>
    )
  }

}

export default SearchForm;
