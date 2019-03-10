import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {observable} from 'mobx';
import {Link} from 'react-router-dom';
import {
    Nav,
    NavLink,
    InputGroup,
    NavbarBrand,
    NavbarToggler,
    InputGroupAddon,
    Button,
    Input,
    Collapse,
    Container,
    Row 
} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../../assets/images/newProject4.png';
import search from '../../../assets/images/search.png';

import {NavbarDropdown} from './NavbarDropdown';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';
import {LogOut} from './LogOut';
import {ColappseUserIcon} from './CollapseUserButton/ColappseUserIcon';

import {Messages} from '../../Messages';

import {navs} from '../../configs/navData';

import navCss from '../../../assets/styles/Navbar/Navbar.module.css';

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
        this.context.appStore.searchValue = event.target.value;
    }
    toggle(e) {
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
        return (
            <Container>
                <Row>
                    <Navbar expand="lg" fixed="top" variant="light" className={navCss.main}>
                        <NavLink to='/' tag={Link}>
                            <NavbarBrand>
                                <img src={logo} width="130" height="40" alt=""/>
                            </NavbarBrand>
                        </NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className={navCss.mainMenu} >
                            <Nav className="mr-auto" navbar className={navCss.nav}>
                                {navs.map((nav) => (
                                    <NavbarDropdown nav={nav} />
                                ))}                         
                                <InputGroup className={navCss.inputSrch}>
                                    <Input placeholder={Messages.search} onBlur={this.onchangeSearch} className={navCss.search}/>
                                    <InputGroupAddon addonType="append">
                                        <NavLink to='/teachers' tag={Link}>
                                            <Button color="light" className={navCss.btn}>
                                                <img src={search} width="25" height="25" alt=""/>
                                            </Button>
                                        </NavLink>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Nav>
                            <div className={navCss.dropUser}>
                                <ColappseUserIcon/>
                            </div>
                            <div className={navCss.dropButtons}>
                                <SighInButton/>
                                <SignUp/>
                            </div>
                        </Collapse>
                    </Navbar>
                </Row>
            </Container>
        );
    }
}
export {Navbare};