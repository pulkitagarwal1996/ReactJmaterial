import React,{ Component } from 'react';
import './Employee.css';


class Employee extends Component {
  render() {
      return (
          <div>
          <div className="outlining">{this.props.empid} </div>
          <div>{this.props.empname}</div> 
          <div>{this.props.empdesignation}</div> 
       </div>
      );
  }
}

  export default Employee;