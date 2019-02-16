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
      				<img src="https://banner2.kisspng.com/20180809/qrh/kisspng-teacher-graphic-design-logo-education-vector-graph-kumpulan-soal-jelang-un-2-17-tips-amp-trik-mengu-5b6cec422d8257.5302761115338650261864.jpg" alt="LOGO" /> 
      			</a>
			</Col>
      	</Row>
      </Container>
    );
  }
}

export {Header};