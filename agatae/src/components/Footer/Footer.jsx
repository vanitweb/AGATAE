import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../../assets/images/logo.png';

/*import './../../../assets/styles/Footer.css';*/
class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col md={2} sm={2}>
                            <img src={logo} alt="LOGO"/>
                        </Col>
                        <Col md={5} sm={7}>
                            <h2>Մեր մասին</h2>
                            <ul>
                                <li><a href="https://www.facebook.com/adrine.setaghyan" target="_blanc">Ադրինե Սեթաղյան</a></li>
                                <li><a href="https://www.facebook.com/gor.manukyan.545" target="_blanc">Գոռ Մանուկյան</a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100011127284436" target="_blanc">Արևիկ Ղարագյոզյան</a></li>
                                <li><a href="https://www.facebook.com/tukhik.gharagyozyan" target="_blanc">Թուխիկ Ղարագյոզյան</a></li>
                                <li><a href="https://www.facebook.com/arusik.apinyan" target="_blanc">Արուսիկ Ափինյան</a></li>
                                <li><a href="https://www.facebook.com/Edgar.nikoghosyan.Sebo" target="_blanc">Էդգար Նիկողոսյան</a></li>
                            </ul>
                        </Col>
                        <Col md={5} sm={7}>
                            <h2>MORE...</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Col>
                    </Row>
                    <Row>
                        <h4>©Copyright AGATAE 02.03.2019</h4>
                    </Row>
                </Container>
            </footer>
        );
    }
}
export {Footer};