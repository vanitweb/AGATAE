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


class SignUp extends Component {
  render() {
    return (

<Button tag={/SighInButton} to="/RegisterPage" />
    );
  }
}

export {SignUp};