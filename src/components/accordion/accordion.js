import React from 'react';
import Collapsible from './collapsible';

import './accordion.css';

export default class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: []
    }
  }

  componentDidMount() {
     this.fetchData();
  }

  fetchData() {
    
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
      {
        gender: `${user.gender}`,
        firstName: `${user.name.first}`,
        lastName: `${user.name.last}`,
        username: `${user.login.username}`,
        registered: `${user.registered.date}`,
        email: `${user.email}`,
        street: `${user.location.street}`,
        city: `${user.location.city}`,
        postcode: `${user.location.postcode}`,
        state: `${user.location.state}`,
        birthday: `${user.dob.date}`,
        phone: `${user.phone}`,
        cell: `${user.cell}`,
        pictureSmall: `${user.picture.thumbnail}`,
        pictureLarge: `${user.picture.large}`
      }
    )))
    .then(users => this.setState({
      users,
      isLoading: false
    }))
    .catch(error => console.log('parsing failed', error))

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
  }
}

