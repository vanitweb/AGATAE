import React, { Component} from 'react';
import { Button} from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Messages} from '../Messages';
import logo from '../../assets/images/New Project4.png';
import './Navbar/RegisterPage.css';



class Header extends Component{
	


	 render() {
    const {messages} = this.state;
    return (
    <Container>
    <Row>
 <Col md={8}></Col>
 <Col md={4}><img src={logo} width="230" height="60" alt=""/></Col>
 </Row>
 <Row >
  <Col md={8}></Col>
  <Col md={4}><h1>{messages.CreateAccount}</h1></Col>
  </Row>
 
    <Row>
     <Col md={8}></Col>
<p>{messages.title}</p>
  </Row>
  </Container>
   );
  }
}
export default Header;