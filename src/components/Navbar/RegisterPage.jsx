import React, { Component} from 'react';
import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import {Form} from 'react-bootstrap';
import classes from '../../../assets/styles/RegisterPage/RegisterPage.module.css';
import { Header } from './Header';

class RegisterPage extends Component {
    render() {
        return (
            <Container className='Reg_Page_Bg'>
                <Row>
                    <Col md={7}></Col>
                    <Col md={5}>
                        <Header/>
                        <Form className={classes.mainForm}>
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
                                <Form.Text className={classes.text_muted}>
                                    example: +37499.....
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCreatePassword">
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                                <Form.Text className={classes.text_muted}>
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

export {RegisterPage};