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
import { Messages } from '../../Messages';

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
                                <Form.Label>{Messages.name}</Form.Label>
                                <Form.Control type="text" placeholder={Messages.mutqName} />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>{Messages.surname}</Form.Label>
                                <Form.Control type="text" placeholder={Messages.mutqSurname} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>{Messages.emailaddress}</Form.Label>
                                <Form.Control type="email" placeholder={Messages.mutqEladdress} />
                            </Form.Group>
                            <Form.Group controlId="formBasicTel">
                                <Form.Label>{Messages.phoneNum}</Form.Label>
                                <Form.Control type="text" placeholder={Messages.mutqPhone} />
                                <Form.Text className={classes.text_muted}>
                                    {Messages.example}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCreatePassword">
                                <Form.Label>{Messages.password}</Form.Label>
                                <Form.Control type="password" placeholder={Messages.mutqPass} />
                                <Form.Text className={classes.text_muted}>
                                    {Messages.text2} 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formRepeatPassword">
                                <Form.Label>{Messages.password2}</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label={Messages.pupil} />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label={Messages.teacher} />
                            </Form.Group>
                            <div>
                                <Button variant="info" type="submit" ClassName="loginBtn" size="lg" block>
                                    {Messages.account}
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