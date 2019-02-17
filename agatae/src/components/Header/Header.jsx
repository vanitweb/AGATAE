import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';
import logo from '../../../assets/styles/Header/Header.css';
import {Logo} from './Logo';
import {Sign} from './Sign';

class Header extends Component {
  render() {
    return (
		<header>
		  <Container>
			<Row>
				<Logo />
				<Sign />
			</Row>
		  </Container>
		</header>
    );
  }
}

export {Header};