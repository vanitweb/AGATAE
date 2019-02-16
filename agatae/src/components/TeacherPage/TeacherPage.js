import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import teacher_1 from "./images/teacher_1.jpg";
import './css/style.css';
import {MainTabs} from './MainTabs.js';

class TeacherPage extends Component{
    render() {
    return(
     
<Container className="main">
    <Row className="justify-content-lg-left">
    
    <Col xs={8}>
    <h1>David Smith</h1>
    <h6>Marketing Director</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam praesentium, 
    odit assumenda perspiciatis optio! Laudantium doloribus non velit officia. Temporibus 
    modi, minus, molestias enim optio tempora dolor voluptatum quaerat distinctio perspiciatis
    aliquam sed quam! Dolores, repudiandae, consequatur. Et, eligendi nisi voluptatibus voluptate 
    ratione recusandae deleniti ducimus, repellat in nobis temporibus?</p>
    <p>Integer dignissim lorem vel venenatis euismod. Donec sit amet purus et 
    quam dapibus convallis sed quis diam. Pellentesque auctor enim vitae 
    lacus rutrum facilisis. Aliquam dignissim augue a molestie pharetra.
    Vivamus bibendum ex diam, tempor rhoncus libero imperdiet ac.</p>
    <Button color="success"className="btn">Hertagrvel</Button>
    </Col>
    <Col lg={true}><img src={teacher_1} width="250" height="300" alt="Your Teacher" rounded/></Col>
    <Col></Col>
  </Row>
  <MainTabs/>
</Container>
   
    )
  }
}

export {TeacherPage};