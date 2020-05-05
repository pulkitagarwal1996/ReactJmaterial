import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome.jsx';
import Employee from './Employee/Employee.js';
import Employeelogin from './Employeelogin/Employeelogin.js';

function App() {
  return (
    <div className="App">

      <h1><Welcome/></h1>

       <div>
             <div>empid : <Employee empid="515082"/> </div>
             <div>name : <Employee empname="Robert"/></div> 
             <div>designation : <Employee empdesignation="Developer"/></div> 
      </div>

<br></br>

      <Employeelogin/>
    </div>
  );
}

export default App;
