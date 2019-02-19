import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';
import logo from '../../../assets/styles/Header/Header.css';
import {Logo} from './Logo';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {Search} from './Search';

class Header extends Component {
  render() {
    return (
		<header>
		  <Container>
			<Row>
				<Logo />
				<Search />
				<SignIn />
				<SignUp />
			</Row>
		  </Container>
		</header>
    );
  }
}

export {Header};