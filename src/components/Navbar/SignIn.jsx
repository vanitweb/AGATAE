import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

import logo from '../../../assets/images/newProject4.png';

import {LoginForm} from './LoginForm';

import { Messages } from '../../Messages';

import '../../../assets/styles/ModalContent/ModalContent.css';

class SignIn extends Component {
    render() {
        return (
            <Modal className="ModalContent"
                {...this.props}
                size="md"
                aria-labelledby="Login-content"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="Login-content">
                        <img src={logo} width="130" height="40" alt=""/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>{Messages.close}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export {SignIn};