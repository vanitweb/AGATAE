import React, { Component } from 'react';
import {FormGroup, Input, Button} from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col,} from 'reactstrap';
import { FormControl, FormLabel} from 'react-bootstrap';


class LoginForm extends Component {
  render() {
    return (
<Container>
<Row className="justify-content-md-center">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <div>
  <Button variant="dark" type="submit"  fullWidth ClassName="loginBtn">
    Login
  </Button>
  </div>
</Form>
</Row>
</Container>
    );
  }
}

export {LoginForm};

