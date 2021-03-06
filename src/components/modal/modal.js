import React from 'react';
import Modal from 'react-responsive-modal';
import Chart from '../chart';


import './modal.css';


export default class ModalWindow extends React.Component {

  
   
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({
      open: true
    });
  };

  onCloseModal = () => {
    this.setState({
      open: false
    });
  };


  render() {
     const { open } = this.state;

 
    return ( 
      <div>
        < button onClick={this.onOpenModal} className="show-chart-btn">Show Chart</button>
        <Modal open={open}
               onClose = {this.onCloseModal}
               center width="600px" height="400px">
          <h2>Gender Users</h2>
          <Chart />
        </Modal>
      </div>
    );
  }
}


