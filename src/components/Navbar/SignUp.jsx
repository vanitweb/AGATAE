import React, {Component} from 'react';
import {NavItem,NavLink,Button,Input,Container} from 'reactstrap';
import {Link} from 'react-router-dom';

import {Messages} from '../../Messages';

class SignUp extends Component {
    render() {
        return (
            <div>
                <NavLink to="/register" tag={Link}>
                    <Button color="light navBtn">{Messages.register}</Button>
                </NavLink>
            </div>
        );
    }
}

export {SignUp};