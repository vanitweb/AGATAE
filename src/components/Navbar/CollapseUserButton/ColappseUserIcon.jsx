import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {SignUp} from '../SignUp';
import {SighInButton} from '../SighInButton';
import {LogOut} from '../LogOut';

import dropUser from '../../../../assets/styles/CollapseUserButton/ColappseUserIcon.module.css';

class ColappseUserIcon extends Component {
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