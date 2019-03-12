import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Card,
    Button,
    CardImg,
    CardTitle,
    CardDeck,
    CardSubtitle,
    CardBody,
    NavLink,
    Col
} from 'reactstrap';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';

import {Messages} from '../../Messages';

import '../../../assets/styles/Lavaguynner/Lavaguynner.css';

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
                        <Col key={i} sm={6} md={4} lg={3} className="pt-4">
                            <Card key={i} className={`card${i % 2}`}>
                                <CardImg top className="cardImg" src={item.photo}/>
                                <CardBody className="text-center">
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle>{item.subject}</CardSubtitle>
                                    <Button color="muted">
                                        <NavLink to={`/teacherPage/${item.username}`} tag={Link} >
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