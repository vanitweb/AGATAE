import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media,
	Button,
	Form,
	FormGroup,
	} from 'reactstrap';
	import Modal from 'react-bootstrap/Modal';
	import {LoginForm} from './LoginForm';


class SignIn extends Component {
  render() {
    return (
    <Modal
        {...this.props}
        size="lg"
        aria-labelledby="Login-content"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="Login-content">
            Մուտք AGATAE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
         <LoginForm/>
				
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export {SignIn};