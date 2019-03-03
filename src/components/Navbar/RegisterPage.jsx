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
                                <Form.Label>Անուն</Form.Label>
                                <Form.Control type="text" placeholder="Մուտքագրել անունը" />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>Ազգանուն</Form.Label>
                                <Form.Control type="text" placeholder="Մուտքագրել ազգանունը" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Էլեկտրոնային հասցե</Form.Label>
                                <Form.Control type="email" placeholder="Մուտքագրել էլ.հասցեն " />
                            </Form.Group>
                            <Form.Group controlId="formBasicTel">
                                <Form.Label>Հեռախոսահամար</Form.Label>
                                <Form.Control type="text" placeholder="Մուտքագրել հեռախոսահամարը " />
                                <Form.Text className={classes.text_muted}>
                                    Օրինակ: +37499.....
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCreatePassword">
                                <Form.Label>Գաղտնաբառ</Form.Label>
                                <Form.Control type="password" placeholder="Մուտքագրել գաղտնաբառը" />
                                <Form.Text className={classes.text_muted}>
                                    Գաղտնաբառը պետք է բաղկացած լինի 9 և ավելի սիմվոլներից: 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formRepeatPassword">
                                <Form.Label>Կրկնել գաղտնաբառը</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Աշակերտ" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Ուսուցիչ" />
                            </Form.Group>
                            <div>
                                <Button variant="info" type="submit" ClassName="loginBtn" size="lg" block>
                                    Ստեղծել հաշիվ
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