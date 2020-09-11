import React from 'react';
import NavBar from 'react-bootstrap/Navbar';

import './App.css';
import EmployeePage from './components/EmployeePage';

function App() {
  return (
    <div>
      <NavBar>
        <NavBar.brand>Hello</NavBar.brand>
        <NavBar.toggle aria-controls="navbar-toggle"></NavBar.toggle>
      </NavBar>
      <EmployeePage></EmployeePage>
    </div>
  );
}

export default App;
