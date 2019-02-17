import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';


class Sign extends Component {
  render() {
    return (
      <Col xs="3" sm="3">
  		<Container>
			<Row>
				<SignIn />
				<SignUp />
			</Row>
		</Container>
	  </Col>
    );
  }
}

export {Sign};