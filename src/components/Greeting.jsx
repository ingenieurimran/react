import React from "react";

function Greeting() {
    const hour = new Date().getHours();
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
    return(<h1 className='heading' style={customStyle}>{greeting}</h1>)
}

export default Greeting