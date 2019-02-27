import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './Lavaguynner.css';
import { Container, Row, Col } from 'reactstrap';
import {TeacherPage} from '../TeacherPage/TeacherPage'
import {Link} from 'react-router-dom';
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
        const {bestTeachers} = this.context.appStore;
        return(
            <CardDeck>
                {bestTeachers.map((item,i) => {
                    return (
                        <Col sm={6} md={4} lg={3} className="pt-4">
                            <Card key={i} style={{backgroundColor:'#FFFFD2'}}>
                                <CardImg top width="100%" src={bestTeachers[i].photo}/>
                                <CardBody key={i} >
                                    <CardTitle key={i}>{bestTeachers[i].name}</CardTitle>
                                    <CardSubtitle key={i}>{bestTeachers[i].subject}</CardSubtitle>
                                    <Button key={i}  color="success" >
                                        <NavLink to="/teacherPage" tag={Link}>
                                           {bestTeachers[i].aboutMe}
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