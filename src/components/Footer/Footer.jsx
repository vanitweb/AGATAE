import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../assets/images/mainLogo.png';

import {FontIcons} from './FontIcons';
import {Messages} from '../../Messages';

import ftrStyle from '../../../assets/styles/Footer/footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container className={ftrStyle.mainDiv}>
                    <Row className="aboutUs  justify-content-center">
                        <Col className={ftrStyle.logo} md={12}><img src={logo} alt="logo" width="160px" height="50px"/></Col>
                    </Row>
                    <Row className="aboutUs  justify-content-center">
                        <Col lg={3} md={4} sm={2} xl='auto' className={ftrStyle.contacts}>
                            <h6>{Messages.contactData}</h6>
                            <p>{Messages.vanadzor}</p>
                            <p>{Messages.email}</p>
                            <p>{Messages.phone}</p>
                        </Col>
                        <Col lg={6} md={5} sm={7} xl='auto' className={ftrStyle.aboutSite}>
                            <h5>{Messages.aboutSite}</h5>
                            <FontIcons />
                        </Col>
                        <Col lg={3} md={3} sm={7} xl='auto' className={ftrStyle.ftrLi}>
                            <h6>{Messages.abouteUs}</h6>
                            <ul>
                                <li ><a href="https://www.facebook.com/adrine.setaghyan" target="_blanc">{Messages.adrine}</a></li>
                                <li><a href="https://www.facebook.com/gor.manukyan.545" target="_blanc">{Messages.gor}</a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100011127284436" target="_blanc">{Messages.arevik}</a></li>
                                <li className={ftrStyle.ftrLi2}><a href="https://www.facebook.com/tukhik.gharagyozyan" target="_blanc">{Messages.tukhik}</a></li>
                                <li><a href="https://www.facebook.com/arusik.apinyan" target="_blanc">{Messages.arusik}</a></li>
                                <li><a href="https://www.facebook.com/Edgar.nikoghosyan.Sebo" target="_blanc">{Messages.edgar}</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" className={ftrStyle.copy} fluid>
                        <p>Copyright &copy; AGATAE {new Date().getFullYear()}</p>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export {Footer};