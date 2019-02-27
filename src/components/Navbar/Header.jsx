import React, { Component } from 'react';
import { Messages } from '../../Messages';
import logo from '../../../assets/images/newProject4.png';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';

class Header extends Component {
    state = {
        messages: Messages
    }

    render() {
        const { messages } = this.state;
        return (
            <Container className="header">
                <Row>
                    <Col>
                        <h1>{messages.CreateAccount}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{messages.title}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export {Header};