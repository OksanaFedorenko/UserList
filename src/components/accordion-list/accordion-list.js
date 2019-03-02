/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RandomUserService from '../../services/randomuser-service';

import './accordion-list.css';


export default class AccordionList extends Component {

  /*randomuser = new RandomUserService();*/

 /* state = {
    user: {}
  };

  /*constructor(props) {
      super(props);
      this.randomuser = new RandomUserService();
      this.updatePeople();
  }*/

 /* constructor() {
    super();
    this.updatePeople();
  }

  onUserLoaded = (user) => {
    this.setState({user})
  }

  updatePeople() {
    this.randomuser
      .getAllPeople()
      .then(this.onUserLoaded);
  }

  render() {

    const { user: {picture, name, login, phone, location} } = this.state;

    return (
      <div className="accordion-list">
        <div className="user-img-small">
           <img src={picture.medium} alt="" />
        </div>
        <ul>
          <li>{name.last}</li>
          <li>{name.first}</li>
          <li>{login.username}</li>
          <li>{phone}</li>
          <li>{location.state}</li>
        </ul>
       {/* Сюда подставить псевдоэлемент с плюсом *//*}
      </div>
    )
  }
};


/*const randomuser = new RandomUserService();

randomuser.getAllPeople().then((body) => {
  console.log(body);
});*/