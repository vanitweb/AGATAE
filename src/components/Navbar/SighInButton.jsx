import {SignIn} from './SignIn';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Messages } from '../../Messages';

import signInCss from'../../../assets/styles/SighInButton/SighInButton.module.css';

class SighInButton extends Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <Button className={signInCss.loginBtn}
                    color="light"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    {Messages.mutq}
                </Button>
                <SignIn
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </div>
        );
    }
}

export {SighInButton};