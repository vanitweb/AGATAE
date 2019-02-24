import React, { Component } from 'react';

import logo from "../../assets/images/error.jpg";
import { Container, Row, Col } from 'reactstrap';
import classes1 from '../../assets/styles/Teacher_Page/error.module.css';

class ErrorPage extends Component {
  render() {

    return (
<Container className={classes1.div1}>
		<img  src={logo} alt="Page not faund!!!! Error 404 " />
</Container>
    );
  }
}

export {ErrorPage};