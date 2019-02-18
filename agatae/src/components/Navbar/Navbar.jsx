import React from 'react';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';

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
          <div>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Կրթություն
            </DropdownToggle>
            <DropdownMenu>
            <NavLink href="/lavaguynner">Հայերեն</NavLink>
            <NavLink href="/lavaguynner">Ռուսերեն</NavLink>
            <NavLink href="/lavaguynner">Անգլերեն</NavLink>
            </DropdownMenu>
          </Dropdown>
          </div>
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
        </Nav>
      </div>
    );
  }
}


export {Navbar};