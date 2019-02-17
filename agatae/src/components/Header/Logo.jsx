import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Media
	} from 'reactstrap';


class Logo extends Component {
  render() {
    return (
      <Col xs="9" sm="9">
		<a href="#">
			<img src="../../../assets/images/logo.png" alt="LOGO" /> 
		</a>
	  </Col>
    );
  }
}

export {Logo};