import React, { Component } from 'react';
import './DrowButton.css';


const  DrowButton = props => (

<button className="toggle-button" onClick={props.click}>

<div className="toggle_buttom_line" ></div>
<div className="toggle_buttom_line"></div>
<div className="toggle_buttom_line"></div>

</button>
);
  

export {DrowButton};