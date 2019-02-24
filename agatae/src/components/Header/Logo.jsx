import React, { Component } from 'react';
import { Col } from 'reactstrap';
import logo from '../../../assets/images/logo.png';


class Logo extends Component {
    render() {
        return (
            <Col xs="2" sm="2">
                <a href="#">
                    <img src={logo} width="32" height="32" alt="Logo" />
                </a>
            </Col>
        );
    }
}

export {Logo};