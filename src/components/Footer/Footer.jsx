import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../../assets/images/mainLogo.png';
import ftrStyle from '../../../assets/styles/Footer/footer.module.css';
import {FontIcons} from './FontIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container className={ftrStyle.mainDiv}>
                    <Row className="aboutUs py-4 justify-content-center">
                        <Col className={ftrStyle.logo}md={12}><img src={logo} alt="logo" width="160px" height="50px"/></Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={2} className="contacts">
                            <h6>ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ</h6>
                            <p>Ք. Վանաձոր</p>
                            <p>example@mail.ru</p>
                            <p>(+374)93354565</p>
                        </Col>
                        <Col md={5} sm={7}>
                            <h5>ԿԱՅՔԻ ՄԱՍԻՆ</h5>
                           <p>
                                Կայքը նախատեսված է կրթական համակարգի բարելավման և զարգացման համար, այն նպատակ ունի հավաքագրել բոլոր դասավանդողների տվյալները մեկ հարթակում՝ խնայելով կայքի շահառուների ժամանակը: Բացի այդ հնարավորություն է տալիս այն մարդկանց, ովքեր ունեն բավարար գիտելիքներ և փորձ, գտնել համապատասխան աշխատանք:
                            </p>
                            <FontIcons />
                        </Col>
                        <Col md={3} sm={7} className={ftrStyle.ftrLi}>
                            <h6>ՄԵՐ ՄԱՍԻՆ</h6>
                            <ul>
                                <li ><a href="https://www.facebook.com/adrine.setaghyan" target="_blanc">Ադրինե Սեթաղյան</a></li>
                                <li><a href="https://www.facebook.com/gor.manukyan.545" target="_blanc">Գոռ Մանուկյան</a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100011127284436" target="_blanc">Արևիկ Ղարագյոզյան</a></li>
                                <li><a href="https://www.facebook.com/tukhik.gharagyozyan" target="_blanc">Թուխիկ Ղարագյոզյան</a></li>
                                <li><a href="https://www.facebook.com/arusik.apinyan" target="_blanc">Արուսիկ Ափինյան</a></li>
                                <li><a href="https://www.facebook.com/Edgar.nikoghosyan.Sebo" target="_blanc">Էդգար Նիկողոսյան</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <p>Copyright &copy; AGATAE {new Date().getFullYear()}</p>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export {Footer};