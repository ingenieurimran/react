import React from 'react';
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const react = 'React';
const fullName = 'Imran Ali';
const currentYear = new Date().getFullYear();

const imgg = 'https://picsum.photos/200'
root.render(
  <div>
    <h1 className='heading' contentEditable='true' spellCheck='false'> Hello {`${react}`}</h1>
    <p>Created by {`${fullName}`}</p>
    <p>Copyright {`${currentYear}`}</p>
    <div>
      <img src={imgg} />
    </div>
  </div>
);




