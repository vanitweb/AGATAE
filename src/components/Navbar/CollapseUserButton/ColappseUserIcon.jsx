import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {SignUp} from '../SignUp';
import {SighInButton} from '../SighInButton';
import {RegisterPage} from '../RegisterPage';
import {LogOut} from '../LogOut';
import dropUser from '../../../../assets/styles/CollapseUserButton/ColappseUserIcon.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ColappseUserIcon extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Button color="outline-success" onClick={this.toggle}>
                    <FontAwesomeIcon icon="user" /></Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card className={dropUser.card}>
                        <CardBody>
                            <SighInButton/>
                            <SignUp/>
                            <LogOut/>
           
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export {ColappseUserIcon};