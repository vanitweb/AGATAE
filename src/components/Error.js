import React, { Component } from 'react';

import { Container } from 'reactstrap';

import logo from '../../assets/images/error.jpg';
import classes1 from '../../assets/styles/ErrorPage/ErrorPage.module.css';

class ErrorPage extends Component {
    render() {
        return (
            <Container className={classes1.div1}>
                <img src={logo} alt="Page not faund!!!! Error 404 " />
            </Container>
        );
    }
}

export {ErrorPage};