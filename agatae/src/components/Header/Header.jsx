import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <Container>
      	<Row>
      		<Col xs="9" sm="9">
      			<a href="#">
      				<img src="../../../assets/images/logo.png" alt="LOGO" /> 
      			</a>
			</Col>
     		<Col xs="1" sm="1">
      			<a href="#">Գրանցվել</a>
			</Col>
     		<Col xs="1" sm="1">
      			<a href="#">Մուտք</a>
			</Col>
      	</Row>
      </Container>
    );
  }
}

export {Header};