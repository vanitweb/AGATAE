import React from 'react';
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

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
          
	<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    	<DropdownToggle nav caret>Կրթություն
            </DropdownToggle>
            	<DropdownMenu>
		        	<NavLink href="/lavaguynner">Հայերեն</NavLink>
		        	<NavLink href="/lavaguynner">Ռուսերեն</NavLink>
		        	<NavLink href="/lavaguynner">Անգլերեն</NavLink>
        		</DropdownMenu>
	</Dropdown>
         <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Արվեստ
            </DropdownToggle>
            <DropdownMenu>
            <NavLink href="/lavaguynner">Պար</NavLink>
            <NavLink href="/lavaguynner">Երգ</NavLink>
            <NavLink href="/lavaguynner">Երաժշտություն</NavLink>
            </DropdownMenu>
          </Dropdown>
		<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Սպորտ
            </DropdownToggle>
            <DropdownMenu>
              <NavLink href="/lavaguynner">Կառատե</NavLink>
              <NavLink href="/lavaguynner">Ձյուդո</NavLink>
              <NavLink href="/lavaguynner">Շախմատ</NavLink>
            </DropdownMenu>
          </Dropdown>
 		<NavItem>
            <NavLink href="#">Այլ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Մեր մասին</NavLink>
          </NavItem>
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