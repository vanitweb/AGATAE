import React from 'react';
import {observer} from "mobx-react";
import {observable, computed} from "mobx";

import {navs} from '../../configs/navData';
import {NavbarDropdown} from './NavbarDropdown';
import {Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink, InputGroup,
  InputGroupAddon} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import { Container, Row, Col } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import {
	Button,
	Form,
	FormGroup,
	Input
} from 'reactstrap';
import logo from '../../../assets/images/newProject4.png';
import search from '../../../assets/images/search.png';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';
import {RegisterPage} from './RegisterPage';
@observer
class Navbare extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
	@observable searchText;
	onchangeSearch = (event) => {
		this.searchText = event.target.value;
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
	<Navbar collapseOnSelect expand="lg" bg="dark justify-content-between" variant="dark">
  	<Navbar.Brand href="#home">
	<img src={logo} width="130" height="40" alt=""/>
  	</Navbar.Brand>
  	<Navbar.Collapse id="responsive-navbar-nav">       
        <NavItem>
            <NavLink tag={Link} to="/" active>Գլխավոր</NavLink>
        </NavItem>
		{navs.map((nav)=> (
			<NavbarDropdown nav={nav} />
		))}
		     
 		<InputGroup>
          <Input placeholder="Search..." onChange={this.onchangeSearch}/>
          <InputGroupAddon addonType="append">
			  <Button color="secondary">
			  	<img src={search} width="25" height="25" alt=""/>
			  </Button>
          </InputGroupAddon>
        </InputGroup>
<SighInButton/>
<SignUp/>
    </Navbar.Collapse>
	</Navbar>
  </div>
    );
  }
}


export {Navbare};