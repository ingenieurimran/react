import React from 'react';
import ReactDOM from 'react-dom';
const react = 'React';
const fullName = 'Imran Ali';
const currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <h1> Hello {`${react}`}</h1>
    <p>Created by {`${fullName}`}</p>
    <p>Copyright {`${currentYear}`}</p>
  </div>
  , document.getElementById("root"));




