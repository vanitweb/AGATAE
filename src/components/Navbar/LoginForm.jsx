import React, { Component } from 'react';
import {Button, Container, Row} from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { Messages } from '../../Messages';

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{Messages.mail}</Form.Label>
                            <Form.Control type="email" placeholder={Messages.mail} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{Messages.password}</Form.Label>
                            <Form.Control type="password" placeholder={Messages.password} />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label={Messages.remember} />
                        </Form.Group>
                        <div>
                            <Button variant="dark" type="submit" fullWidth ClassName="loginBtn">
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