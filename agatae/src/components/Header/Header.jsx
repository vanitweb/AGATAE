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
      		<Col xs="2" sm="2">
      			<a href="#">
      				<img src="./public/favicon.ico" alt="LOGO" /> 
      			</a>
			</Col>
      	</Row>
      </Container>
    );
  }
}

export {Header};