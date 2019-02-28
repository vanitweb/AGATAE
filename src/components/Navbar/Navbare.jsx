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
import navCss from '../../../assets/styles//Navbar/Navbar.module.css';
import search from '../../../assets/images/search.png';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';
import {RegisterPage} from './RegisterPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {DrowButton} from './ResponsiveNavbar/DrowButton';

@observer
class Navbare extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
	static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
	onchangeSearch = (event) => {
	    this.context.appStore.searchValue = event.target.value;
	}
	toggle(e) {
	    console.log(e.target.getAttribute('data-name'));
	    this.setState({
	        dropdownOpen: e.target.getAttribute('data-name')
	    });
	}
    render() {
    const {drawClick} = this.props;
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className={navCss.main} variant="light" >
                <DrowButton click = {drawClick} className={navCss.rowButton} />
                <NavLink to='/' tag={Link}>
                    <Navbar.Brand href="/" className={navCss.brand} >
                        <img src={logo} width="130" height="40" alt=""/>
                    </Navbar.Brand>
                    </NavLink>
                    <Navbar.Collapse className="collapseGroup" id="responsive-navbar-nav" className={navCss.mainMenu}>       
                        {navs.map((nav) => (
                            <NavbarDropdown nav={nav} />
                        ))}
                        <InputGroup className="searchGroup">
                            <Input placeholder="Search..." onChange={this.onchangeSearch} className="search"/>
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