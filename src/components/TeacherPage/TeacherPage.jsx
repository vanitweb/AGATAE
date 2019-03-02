import React, { Component } from 'react';
import {PersonalPageUsers} from '../PersonalPageUsers/PersonalPageUsers'
import {
    Button,
    Container,
    Row, 
    Col
} from 'reactstrap';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import tStyle from './css/style.module.css';
import {MainTabs} from './MainTabs';

@observer
class TeacherPage extends Component {
	static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
		const {teacher} = this.context.appStore;
        return (
            <Container className={tStyle.main}>
                <Row className="justify-content-lg-left">    
                    <Col xs={8}>
                        <h1>{teacher.name}</h1>
                        <h3>Մասնագիտությունը՝ {teacher.subject}</h3>
                        <p>Սեռը՝ {teacher.sex}</p>
                        <p>Տարիքը՝ {teacher.age}</p>
                        <p>Կազմակերպությունը՝ {teacher.company}</p>
                        <p>Անձնական ինֆորմացիա՝ {teacher.aboutMe}</p>
                        <PersonalPageUsers />
                    </Col>
                    <Col lg={true}>
                    	<img className={tStyle.teacherImage} src={teacher.photo} width="250" height="300" alt="Your Teacher"/>
                    	<MainTabs/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { TeacherPage };