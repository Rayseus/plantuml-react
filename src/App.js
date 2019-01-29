import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchbar';

class App extends Component {


  render() {
    // const {post} = this.state
    return (
      <div className="posts">
        <SearchBar></SearchBar>
        {/* {this.state.data.map(datas => <div>
          <li >{datas.id}</li>
          <div>{datas.title}</div>
          </div>
        )} */}
      
      </div>
    );
  }
}

export default App;
