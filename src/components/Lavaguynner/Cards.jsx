import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from'./Lavaguynner.module.css';
import './Lavaguynner.css';
import { observer } from 'mobx-react';
import { Container, Row, Col } from 'reactstrap';
import {TeacherPage} from '../TeacherPage/TeacherPage'
import {Link} from 'react-router-dom';
import {Messages} from '../../Messages';
import { 
    Card,
    Button,
    CardImg,
    CardTitle,
    CardDeck,
    CardSubtitle,
    CardBody,
    NavLink,
} from 'reactstrap';

@observer
class Cards extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    
    onClick = (event) => {
        this.context.appStore.teacher = this.context.appStore.currentTeachers[event.currentTarget.getAttribute('data-option')];
    }    
    render() {
        const {currentTeachers} = this.context.appStore;
        return(
            <CardDeck inverse className={s.content}>
                {currentTeachers.map((item,i) => {
                    return (
                        <Col sm={6} md={4} lg={3} className="pt-4">
                            <Card key={i} style={{backgroundColor:'#FFFFD2'}}>
                                <CardImg top width="100%" height="130px" src={item.photo}/>
                                <CardBody className="text-center">
                                    <CardTitle className={s.font}>{item.name}</CardTitle>
                                    <CardSubtitle className={s.font}>{item.subject}</CardSubtitle>
                                    <Button data-option={i} onClick={this.onClick} color="success">
                                        <NavLink to="/teacherPage" tag={Link} className={s.white} >
                                        	{Messages.personalInfo}
                                        </NavLink>
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </CardDeck>
        );
    }
}

export {Cards};