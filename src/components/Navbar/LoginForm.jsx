import React, { Component } from 'react';
import {Button, Container, Row, Label, Input, FormFeedback, FormText, FormGroup} from 'reactstrap';
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
state = {
    validMail: false,
    validPassword: true,
  
  }
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

    submitLogForm = () => {
        this.context.userStore.submitLogForm();
        	  this.setState({
          validMail: true,
          validPassword:true,
        });
    }

    render() {
    const{Emailvalue}= this.context.userStore;
    const{validMail}= this.state;
    const{passwordvalue,error}= this.context.userStore;

    console.log(this.context);

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                    <Label for="email">{Messages.mail}</Label>
                       <FormGroup>
                          <Input invalid={error.email}
                          type="email"
                          placeholder={Messages.mail}
                          onChange={this.onChange}
                          name="email"
                          value={Emailvalue} /> 
                          {error.email && <FormText>Invalid e-mail address</FormText>}
                          </FormGroup>


                         <FormGroup>
                        <Label for="PassWord">{Messages.password}</Label>
                          <Input 
                          type="password" 
                          placeholder={Messages.password}
                          onChange={this.onChange}
                          name='password'
                          value={passwordvalue}/>
                          <FormText>Wrong Password</FormText>
                      </FormGroup>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label={Messages.remember} />
                        </Form.Group>
                        <div>
                            <Button variant="dark" type="submit" fullWidth ClassName="loginBtn" onClick={this.submitLogForm}>
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
