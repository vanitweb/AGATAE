import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Form} from 'react-bootstrap';
import {navs} from '../../configs/navData';
import {NavbarDropdown} from './NavbarDropdown';
import {
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
	Container
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/newProject4.png';
import navCss from '../../../assets/styles//Navbar/Navbar.module.css';
import search from '../../../assets/images/search.png';
import {SignUp} from './SignUp';
import {SighInButton} from './SighInButton';
import {RegisterPage} from './RegisterPage';
import { BrowserRouter as Router, Route} from "react-router-dom";


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
        		<Navbar collapseOnSelect expand="sm" bg="dark">
    				<Navbar.Brand href="/">
                		<img src={logo} width="130" height="40" alt=""/>
	                </Navbar.Brand>
    				<Navbar.Collapse id="responsive-navbar-nav">       
    					{navs.map((nav) => (
							<NavbarDropdown nav={nav} />
	                    ))}

							<Input  className={navCss.inputSrch} placeholder="Search" size='sm' onChange={this.onchangeSearch}/>
							<InputGroupAddon addonType="append">
								<Button color="secondary">
									<img src={search} width="25" height="25" alt=""/>
								</Button>
							</InputGroupAddon>
    					<SighInButton/>
    					<SignUp/>
	                </Navbar.Collapse>
	            </Navbar>
    		</div>
	    );
	}
}

export {Navbare};