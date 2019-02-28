import React, { Component } from 'react';
import {NavItem,NavLink,Button,Input,Container} from 'reactstrap';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div>
             <NavLink variant="success" to="/register" tag={Link}>
               <Button>Register</Button>
              </NavLink>
            </div>
        );
    }
}

export {SignUp};