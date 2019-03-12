import React, {Component} from 'react';
import {NavLink,Button} from 'reactstrap';
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