import React, { Component } from 'react';
import Collapsible from './collapsible';
import RandomUserService from './../../services/randomuser-service';
import './accordion.css';

export default class Accordion extends Component {

  randomUserService = new RandomUserService();

  state = {
    isLoading: true,
    users: []
  }
  
  componentDidMount() {
     this.randomUserService
     .getAllPeople()
     .then((users) => {
       console.log(users);
       this.setState({
         users,
         isLoading: false
       });
     });
  }

  render() {

    const {isLoading, users} = this.state;
    
    return (
      <div>
        <div className={`content ${isLoading ? 'is-loading' : ''}`}>
          <div className="panel-group">

            {
              !isLoading && users.length > 0 ? users.map(user => {

                const {
                  gender,
                  username,
                  firstName,
                  lastName,
                  registered,
                  email,
                  street,
                  city,
                  postcode,
                  state,
                  birthday,
                  phone,
                  cell,
                  pictureLarge,
                  pictureSmall
                } = user;              

                const title = [pictureSmall, firstName, lastName, username, phone, state];
              
                const genderIcon = (gender === "male") ? <i className="fas fa-male"></i> : <i className="fas fa-female"></i>;
               
                return <Collapsible key={username} title={title}>
                  <div className = "collapse-wrapper" >
                    <h3>
                      <span>{firstName}</span>
                      {genderIcon}
                    </h3>
                    <div className="collapse-flex-wrapper">
                      <ul className="collapse-flex">
                        <li className="collapse-item"><span>Username</span>{username}</li >
                        <li className="collapse-item"><span>Registered</span>{registered}</li>
                        <li className="collapse-item"><span>Email</span>{email}</li>
                        <li className="collapse-item"><span>Address</span>{street}</li>
                        <li className="collapse-item"><span>City</span>{city}</li>
                        <li className="collapse-item"><span>Zip Code</span>{postcode}</li>
                        <li className="collapse-item"><span>Birthday</span>{birthday}</li>
                        <li className="collapse-item"><span>Phone</span>{phone}</li>
                        <li className="collapse-item"><span>Cell</span>{cell}</li>
                      </ul>
                      <div className="collapse-img">
                        <img src={pictureLarge} alt="" />
                      </div>
                    </div>
                  </div>
                </Collapsible>
              }) : null
            }

          </div>
          <div className="loader">
            <div className="icon"></div>
          </div>
        </div>
      </div>
    );
  };
};
  