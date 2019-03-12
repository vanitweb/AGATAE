import React, {Component} from 'react';
import {NavLink,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import {Messages} from '../../Messages';

class LogOut extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" tag={Link}>
                    <Button color="light navBtn">{Messages.out}</Button>
                </NavLink>
            </div>
        );
    }
}

export {LogOut};