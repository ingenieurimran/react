import React from 'react';
import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);
const hour = new Date(2022, 1, 1, 19).getHours();

const customStyle = {
  color: '',
};
let greeting;
let colorName;
if (hour < 12 && hour >= 0) {
  greeting = 'Good Morning';
  customStyle.color = 'red';
} else if (hour < 18 && hour >= 12) {
  greeting = 'Good Afternoon';
  customStyle.color = 'green';
} else {
  greeting = 'Good Evening';
  customStyle.color = 'blue';
}

root.render(<h1 className='heading' style={customStyle}>{greeting}</h1>)