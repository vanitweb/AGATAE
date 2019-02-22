import React, { Component} from 'react';
import { Button} from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Messages} from '../../Messages';
import logo from '../../../assets/images/newProject4.png';
import './RegisterPage.css';

class App extends Component {
   state = {
      messages: Messages,
    }
  render() {
    const {messages} = this.state;
    return (
      <Container className='Reg_Page_Bg'>
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
<Row >
<Col md={7}></Col>
<Col md={5}>
<Form>
    <Form.Group controlId="formBasicName">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" />
    </Form.Group>


  <Form.Group controlId="formBasicSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="text" placeholder="Enter surname" />
    </Form.Group>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    

  <Form.Group controlId="formBasicTel">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter tel" />
    <Form.Text className="text-muted">
      example: +37499.....
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicCreatePassword">
    <Form.Label>Create Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  <Form.Text className="text-muted">
      Password most by 9 letters or more. 
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formRepeatPassword">
    <Form.Label>Repeat Password</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>

  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="I'm a member" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="I'm a teacher" />
  </Form.Group>

  <div>
  <Button variant="info" type="submit" ClassName="loginBtn" size="lg" block>
    Create Account
  </Button>
  </div>

</Form>
</Col>
</Row>
</Container>
    );
  }
}
export default App;
