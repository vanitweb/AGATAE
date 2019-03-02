import React, { Component } from 'react';
import {NavItem,NavLink,Button,Input,Container} from 'reactstrap';
import {Link} from 'react-router-dom';

class LogOut extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" tag={Link}>
                    <Button variant="success">Logout</Button>
                </NavLink>
            </div>
        );
    }
}

export {LogOut};