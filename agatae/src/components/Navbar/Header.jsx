import React, { Component } from 'react';
import { Messages } from '../../Messages';
import logo from '../../../assets/images/New Project4.png';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';
class Header extends Component {
    state = {
        messages: Messages,
    }

    render() {
        const { messages } = this.state;
        return (
  <Container className="header">
    <Row className="justify-content-md-center">
      <Col>
        <img src={logo} width="230" height="60" alt=""/>
      </Col>
    </Row>
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