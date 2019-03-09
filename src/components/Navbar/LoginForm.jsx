import React, { Component } from 'react';
import {Button, Container, Row, Label, Input, FormFeedback, FormText} from 'reactstrap';
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
    userStore: PropTypes.object   
  }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.context.userStore.setAuthField(name, value);
    }

    validateForm() {
        this.context.userStore.validateAuthForm();
    }

    errorClass(error) {
       this.context.userStore.isValid();
    }

    submitForm = () => {
this.context.userStore.submitForm();
    }

    render() {
    const{Emailvalue}= this.context.userStore;
    const{passwordvalue}= this.context.userStore;
    console.log(this.context);
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{Messages.mail}</Form.Label>
                            <Form.Control
                             type="email"
                              placeholder={Messages.mail}
                              onChange={this.onChange}
                              name="email"
                              value={Emailvalue}
                               />

                                  <Label for="formBasicEmail">Invalid input</Label>
                                  <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{Messages.password}</Form.Label>
                            <Form.Control
                             type="text" 
                             placeholder={Messages.password}
                              onChange={this.onChange}
                              name='password'
                              value={passwordvalue}
                              />

                              <Label for="formBasicPassword">Invalid Password!!!</Label>
                              <FormFeedback tooltip>sss</FormFeedback>

                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label={Messages.remember} />
                        </Form.Group>
                        <div>
                            <Button variant="dark" type="submit" fullWidth ClassName="loginBtn" onClick={this.submitForm}>
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