import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <CardDeck inverse className="cardContent">
                {currentTeachers.map((item,i) => {
                    return (
                        <Col sm={6} md={4} lg={3} className="pt-4">
                            <Card key={i} className={`card${i % 2}`}>
                                <CardImg top  className="cardImg" src={item.photo}/>
                                <CardBody className="text-center">
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle>{item.subject}</CardSubtitle>
                                    <Button color="muted">
                                        <NavLink to={`/teacherPage/${item.username}`}  tag={Link} >
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