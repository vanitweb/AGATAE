import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Messages } from '../../Messages';

import '.../../../assets/styles/Header/Header.css';

class Header extends Component {
    render() {
        return (
            <Container className="header">
                <Row>
                    <Col>
                        <h1>{Messages.register}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{Messages.text1}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export {Header};