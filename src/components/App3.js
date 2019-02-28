import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {observable} from 'mobx';
import {Form} from 'react-bootstrap';
import {navs} from '../configs/navData';
import {NavbarDropdown} from './Navbar/NavbarDropdown';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    InputGroup,
    NavbarToggler,
    InputGroupAddon,
    Button,
    Input,
    Collapse,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/newProject4.png';
import navCss from '../../assets/styles/Navbar/Navbar.module.css';
import search from '../../assets/images/search.png';
import {SignUp} from './Navbar/SignUp';
import {SighInButton} from './Navbar/SighInButton';
import {RegisterPage} from './Navbar/RegisterPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {DrowButton} from './Navbar/ResponsiveNavbar/DrowButton';

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="light" expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;