import React, { Component } from 'react';
<<<<<<< HEAD
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
=======

class SignUp extends Component {
    render() {
        return (
            <div></div>     
        );
    }
>>>>>>> f8e4714181c64cb31f96b989f052208e7fb94870
}

export {SignUp};