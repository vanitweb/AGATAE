import React, { Component } from 'react';
import {
    Button,
    Container,
    Row, 
    Col
} from 'reactstrap';



class PersonalPageUsers extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-lg-left">    
                    <Col xs={8}>
                        <h1>User 1</h1>
                        <h6>im andznakan ej</h6>
                    </Col>
                    <Col>
                        <table>
                            <tr>
                                <td>երկուշաբթի</td>
                                <td>երեքշաբթի</td>
                                <td>չորեքշաբթի</td>
                                <td>հինգշաբթի</td>
                                <td>ուրբաթ</td>
                                <td>շաբաթ</td>
                                <td>կիրակի</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { PersonalPageUsers };