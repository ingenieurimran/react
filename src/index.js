import React, { useLayoutEffect } from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/App"

// import Add, { Multiply } from "./components/calculator.js"
import * as cal from "./components/calculator.js"
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ul>
    <li>{cal.Add(1, 2)}</li>
    <li>{cal.Multiply(2, 3)}</li>
    <li>{cal.Substract(7, 2)}</li>
    <li>{cal.Divide(5, 2)}</li>
  </ul>
)
