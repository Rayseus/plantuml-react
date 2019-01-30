import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchbar';

class App extends Component {
  
  render() {
    // const {post} = this.state
    return (
      <div className="posts">
        <SearchBar></SearchBar>
      
      </div>
    );
  }
}

export default App;
