import React, { Component } from 'react';
import {
    Container,
    Row, 
    Col
} from 'reactstrap';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import {observable} from 'mobx';

import {PersonalPageUsers} from'../PersonalPageUsers/PersonalPageUsers';
import {PersonalPageTeachers} from'../PersonalPageTeachers/PersonalPageTeachers';
import {MainTabs} from './MainTabs';
import {Messages} from '../../Messages';

import tStyle from '../../../assets/styles/TeacherPage/TeacherPage.module.css';

@observer
class TeacherPage extends Component {
    static propTypes = {
        match: PropTypes.object,
        username: PropTypes.string
    }
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.context.appStore.teacherID = this.props.match.params.username;
    }
    @observable istrue = true;
    render() {
        let element;
        if(this.istrue) {
            element = <PersonalPageUsers />; 
        } else {
            element = <PersonalPageTeachers />; 
        }
        const {teacher, teacherID} = this.context.appStore;
        return (
            !!teacherID && <Container className={tStyle.main}>
                <Row className="justify-content-lg-left">    
                    <Col xs={8}>
                        <h1>{teacher.name}</h1>
                        <h3>{Messages.profession} {teacher.subject}</h3>
                        <p>{Messages.sex} {teacher.sex}</p>
                        <p>{Messages.age} {teacher.age}</p>
                        <p>{Messages.company} {teacher.company}</p>
                        <p>{Messages.aboutMe} {teacher.aboutMe}</p>
                        {element}
                    </Col>
                    <Col lg={true}>
                        <img className={tStyle.teacherImage} src={teacher.photo} width="250" height="300" alt="Your Teacher"/>
                        <MainTabs teacher={teacher}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { TeacherPage };