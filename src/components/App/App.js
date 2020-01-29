import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import Menu from '../Menu/Menu';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {data: local}
  }

  setNewsType(newsType) {
    this.setState( {data: newsType} );
  }

  render() {
    return (
      <div className="app">
        <Menu setNewsType={this.setNewsType}/>
        <NewsContainer localNews={local}/>
      </div>
    );
  }
}

export default App;
