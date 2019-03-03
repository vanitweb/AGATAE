import React, { Component } from 'react';
import {Button, Container, Row} from 'reactstrap';
import Form from 'react-bootstrap/Form';

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Էլ.հասցե</Form.Label>
                            <Form.Control type="email" placeholder="Էլ.հասցե" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Գաղտնաբառ</Form.Label>
                            <Form.Control type="password" placeholder="Գաղտնաբառ" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Հիշել" />
                        </Form.Group>
                        <div>
                            <Button variant="dark" type="submit" fullWidth ClassName="loginBtn">
                                Մուտք
                            </Button>
                        </div>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export {LoginForm};