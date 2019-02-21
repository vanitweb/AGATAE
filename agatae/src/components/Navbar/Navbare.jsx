import React from 'react';

import {navs} from '../../configs/navData';
import {NavbarDropdown} from './NavbarDropdown';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import { Container, Row, Col } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import {
	Button,
	Form,
	FormGroup,
	Input
} from 'reactstrap';
import logo from '../../../assets/images/LogoAgate.png';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';

class Navbare extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle(e) {
	console.log(e.target.getAttribute('data-name'));
    this.setState({
      dropdownOpen: e.target.getAttribute('data-name')
    });
  }
  render() {
    return (
    <div>
	<Navbar collapseOnSelect expand="lg" bg="dark justify-content-between" variant="secondary">
  	<Navbar.Brand href="#home">
	<img src={logo} width="100" height="35" alt=""/>
  	</Navbar.Brand>
  	<Navbar.Collapse id="responsive-navbar-nav">       
        <NavItem>
            <NavLink href="/glxavor" active>Գլխավոր</NavLink>
        </NavItem>
		{navs.map((nav)=> (
			<NavbarDropdown nav={nav} />
		))}
		     
 <Form inline>
	<FormGroup>
		<Input type="input" name="search" placeholder="Search" />
		<Button variant="secondary">Search</Button>
	</FormGroup>
</Form>
<SighInButton/>
<SignUp/>
    </Navbar.Collapse>
	</Navbar>
  </div>
    );
  }
}


export {Navbare};