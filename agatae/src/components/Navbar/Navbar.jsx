import React from 'react';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import navData from '../../data/navData';
import Dropdown from './Dropdown';

class Navbar extends React.Component {
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
        <Nav tabs>
          <NavItem>
            <NavLink href="/glxavor" active>Գլխավոր</NavLink>
          </NavItem>
          <Dropdown />
          
          <NavItem>
            <NavLink href="#">Այլ</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export {Navbar};