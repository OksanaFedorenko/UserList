import React, { Component } from 'react';

import AppHeader from '../app-header';
import Accordion from '../accordion';
import SearchPanel from '../search-panel';
import ModalWindow from '../modal';


import './app.css';


export default class App extends Component {

  render() {
  
    return ( 
      <div className = "userlist-app">
        <h1>User List</h1>
        <div className="btn-search-wrapper">
          <div className = "search-panel">
            <SearchPanel/>
          </div>
        <ModalWindow />   
        </div>
        <AppHeader />
        <Accordion />
      </div>
    );
  };
};
