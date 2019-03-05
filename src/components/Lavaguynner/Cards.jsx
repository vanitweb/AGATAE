import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from'../../../assets/styles/Lavaguynner/Lavaguynner.module.css';
import '../../../assets/styles/Lavaguynner/Lavaguynner.css';
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
    render() {
        const {currentTeachers} = this.context.appStore;
        return(
            <CardDeck inverse className={s.content}>
                {currentTeachers.map((item,i) => {
                    return (
                        <Col sm={6} md={4} lg={3} className="pt-4">
                            <Card key={i} className={`card${i % 2}`}>
                                <CardImg top  className="cardImg" src={item.photo}/>
                                <CardBody className="text-center">
                                    <CardTitle className={s.font}>{item.name}</CardTitle>
                                    <CardSubtitle className={s.font}>{item.subject}</CardSubtitle>
                                    <Button data-option={item.username} color="muted">
                                        <NavLink to={`/teacherPage/${item.username}`}  tag={Link} className={s.white} >
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