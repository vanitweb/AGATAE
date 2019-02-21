import React, { Component} from 'react';
import {FormGroup, Button} from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form} from 'react-bootstrap/Form';
import { FormControl, FormLabel} from 'react-bootstrap';
import { Container, Row, Col,} from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink,  } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Messages} from '../../Messages';

class RegisterPage extends Component {
   state = {
      messages: Messages,
    }
  render() {
    const {messages} = this.state;
    return (
      <Container className="">
  <Row className="justify-content-md-center">
<Col></Col>
  <Col><h1>{messages.CreateAccount}</h1></Col>
 <Col></Col>
  </Row>
  <Row className="justify-content-md-center">
<h1>{messages.title}</h1>
  </Row>
  <Row className="justify-content-md-center">
<InputGroup className="mb-4">
    <InputGroup.Prepend>
    </InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Full Name</InputGroup.Text>
    <FormControl aria-label="default" aria-describedby="inputGroup-sizing-default" />
  </InputGroup>


  <InputGroup className="mb-4">
    <InputGroup.Prepend>
      <InputGroup.Text id="email-address">Email adress</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="default" aria-describedby="email-address" />
  </InputGroup>

  <InputGroup className="mb-4">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">tel:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="default" aria-describedby="inputGroup-sizing-default" />
  </InputGroup>

  <InputGroup className="mb-4">
    <InputGroup.Prepend>
      <InputGroup.Text id="create-password">Create password</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="default" aria-describedby="create-password" />
  </InputGroup>

  <InputGroup className="mb-4">
    <InputGroup.Prepend>
      <InputGroup.Text id="repeat-password">Repeat password</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="default" aria-describedby="repeat-password" />
  </InputGroup>


</Row>
</Container>
    );
  }
}
export {RegisterPage};
