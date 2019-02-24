import React, { Component } from 'react';
import  { ButtonToolbar, Button } from 'reactstrap';
import {
	Container,
	Row,
	Col,
	Media,
	} from 'reactstrap';
	import {RegisterPage} from './RegisterPage';
	import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
	import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
	import {Routes} from '../Routes';

class SignUp extends Component {
  render() {
    return (
    <div>
		<a href="/register">Register</a>
		
    </div> 
    
    );
  }

}


export {SignUp};