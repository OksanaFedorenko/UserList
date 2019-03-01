import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ShowChart from '../show-chart';
import AccordionList from '../accordion-list';
import AccordionItem from '../accordion-item';


import './app.css';

export default class App extends Component {

  render() {

    return ( 
      <div className="container">
        
        <div className = "top-panel d-flex" >
          <SearchPanel />
        </div>
        < AppHeader />
        <AccordionItem />  
      </div>
    );
  };
};
