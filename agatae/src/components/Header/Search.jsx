import React, { Component } from 'react';
import {
	Col,
	Button,
	Form,
	FormGroup,
	Input
} from 'reactstrap';

class Search extends React.Component {
  render() {
    return (
		<Col xs="2" sm="2">
		  <Form inline>
			<FormGroup>
			  <Input type="input" name="search" placeholder="Search" />
			  <Button color="success">Search</Button>
			</FormGroup>
		  </Form>
		</Col>
    );
  }
}
export {Search};