import React, { Component } from 'react';
import {Button, Container, Row} from 'reactstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Messages } from '../../Messages';

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

class LoginForm extends Component {
	static contextTypes = {
    UserStore: PropTypes.object   
  }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.context.UserStore.setAuthField(name, value);
    }

    validateForm() {
        this.context.UserStore.validateAuthForm();
    }
	
	
    errorClass(error) {
       this.context.UserStore.isValid();
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{Messages.mail}</Form.Label>
                            <Form.Control
                             type="email"
                              placeholder={Messages.mail}
                               />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{Messages.password}</Form.Label>
                            <Form.Control
                             type="password" 
                             placeholder={Messages.password}
                              />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label={Messages.remember} />
                        </Form.Group>
                        <div>
                            <Button variant="dark" type="submit" fullWidth ClassName="loginBtn" onClick={this.validateForm}>
                                {Messages.mutq}
                            </Button>
                        </div>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export {LoginForm};
