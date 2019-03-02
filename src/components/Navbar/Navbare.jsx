import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {observable} from 'mobx';
import {Form} from 'react-bootstrap';
import {navs} from '../../configs/navData';
import {NavbarDropdown} from './NavbarDropdown';
import {
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    NavbarBrand,
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
import logo from '../../../assets/images/newProject4.png';
import navCss from '../../../assets/styles/Navbar/Navbar.module.css';
import search from '../../../assets/images/search.png';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';
import {RegisterPage} from './RegisterPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {LogOut} from './LogOut';

@observer
class Navbare extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            isOpen: false
        };
    }
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    @observable currentSearch;
    onchangeSearch = (event) => {
        this.currentSearch = event.target.value;
    }
    onclick = (event) => {
        this.context.appStore.subjectName = event.currentTarget.getAttribute('data-option');
        this.context.appStore.currentLink = event.currentTarget.getAttribute('data-link');
        this.context.appStore.searchValue = '';
    }
    onclicSearch = (event) => {
        this.context.appStore.currentLink = event.currentTarget.getAttribute('data-link');
        this.context.appStore.searchValue = this.currentSearch;
        this.context.appStore.subjectName = '';
    }
    toggle(e) {
        console.log(e.target.getAttribute('data-name'));
        this.setState({
            dropdownOpen: e.target.getAttribute('data-name')
        });
    }
     toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
     toggle2() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
    render() {
    const {drawClick} = this.props;
        return (
            <div>
                <Navbar expand="lg" fixed="top"  bg="dark" variant="light" className={navCss.main}>
                    <NavLink onClick={this.onclick} data-option="ՄԵՐ ԱՌԱՋԱՏԱՐՆԵՐԸ" data-link="/" to='/' tag={Link}>
                        <NavbarBrand>
                            <img src={logo} width="130" height="40" alt=""/>
                        </NavbarBrand>
                    </NavLink>
                        <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar className={navCss.mainMenu}>
                                <Nav className="mr-auto" navbar className={navCss.nav}>
                                    {navs.map((nav) => (
                                        <NavbarDropdown nav={nav} />
                                    ))}                         
                            <InputGroup className={navCss.inputSrch}>
                                <Input placeholder="Search..." onChange={this.onchangeSearch} className="search"/>
                                    <InputGroupAddon addonType="append">
                                        <NavLink onClick={this.onclicSearch} data-link="/lavaguynner" to='/lavaguynner' tag={Link}>
                                            <Button color="secondary" className={navCss.btn}>
                                                <img  src={search} width="25" height="25" alt=""/>
                                            </Button>
                                        </NavLink>
                                    </InputGroupAddon>
                            </InputGroup>
                                </Nav>
                                <SighInButton/>
                                <SignUp/>
								<LogOut/>
                            </Collapse>
                        </Navbar>
            </div>
        );
    }
}
export {Navbare};