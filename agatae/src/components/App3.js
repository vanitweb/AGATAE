import React, { Component} from 'react';
import { Button} from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import classes from './Navbar/RegisterPage.module.css';
import { Routes } from './Routes';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
      
   <Routes/>
  
      </Container>
    );
  }
}
export default App;
