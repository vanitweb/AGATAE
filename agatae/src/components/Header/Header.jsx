import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';
import '../../../assets/styles/Header/Header.css';
import {Logo} from './Logo';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';

class Header extends Component {
  render() {
    return (
		<header>
		  <Container>
			<Row>
				<Logo />
				<SignIn />
				<SignUp />
			</Row>
		  </Container>
		</header>
    );
  }
}

export {Header};