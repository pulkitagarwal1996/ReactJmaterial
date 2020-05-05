import React,{ Component } from 'react';
import './Employeelogin.css';

class Employeelogin extends Component {
  render() {
      return (
          <div>
              Username <input></input>
              Password <input></input>
              <button className="btn">Login</button>
          </div>
      );
  }
}

  export default Employeelogin;