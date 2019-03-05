import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import errorPage from '../../assets/styles/ErrorPage/ErrorPage.module.css';
import { Messages } from '../Messages';

class ErrorPage extends Component {
    render() {
        return (
            <Container className={errorPage.errMessages}>
            <Row className="justify-content-md-center">
            <Col>
                {<h1>{Messages.forErrPage}</h1>}
            </Col>
                </Row>
            </Container>
        );
    }
}

export {ErrorPage};