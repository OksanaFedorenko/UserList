import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


export default class Chart extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['male', 'female'],
        datasets: [{
          label: 'Users',
          data: [11, 9],
          backgroundColor: ['rgba(124,181,236, 0.6)', 'rgba(67,67,72, 0.6)']
        }
      ]
    }
  } 
}
  render() {

    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{}}
        />
      </div>
      
    )
  }
}