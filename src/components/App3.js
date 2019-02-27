import React, { Component } from 'react';
import {
  Button,
  Container,
  Row, 
  Col
} from 'reactstrap';
import teacher_1 from '../components/TeacherPage/images/teacher_1.jpg';
import tStyle from './TeacherPage/css/style.module.css';
import {MainTabs} from './TeacherPage/MainTabs.js';

class App extends Component {
  render() {
    return (
            <Container className={tStyle.main}>
                <Row className="justify-content-lg-left">    
                    <Col xs={8}>
                        <h1>David Smith</h1>
                        <h6>Marketing Director</h6>
                        <p>Laorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam praesentium, 
    odit assumenda perspiciatis optio! Laudantium doloribus non velit officia. Temporibus 
    modi, minus, molestias enim optio tempora dolor voluptatum quaerat distinctio perspiciatis
    aliquam sed quam! Dolores, repudiandae, consequatur. Et, eligendi nisi voluptatibus voluptate 
    ratione recusandae deleniti ducimus, repellat in nobis temporibus?</p>
                        <p>Integer dignissim lorem vel venenatis euismod. Donec sit amet purus et 
    quam dapibus convallis sed quis diam. Pellentesque auctor enim vitae 
    lacus rutrum facilisis. Aliquam dignissim augue a molestie pharetra.
    Vivamus bibendum ex diam, tempor rhoncus libero imperdiet ac.</p>
                        <Button color="success"className={tStyle.btn}>Hertagrvel</Button>
                    </Col>
                    <Col lg={true}><img className={tStyle.teacherImage} src={teacher_1} width="250" height="300" alt="Your Teacher"/></Col>
                    <MainTabs/>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default App;
