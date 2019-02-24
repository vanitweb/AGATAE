import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class MainTabs extends Component {
    state = {
        toDoArray: [
            'Email:myEmailExample@,mail.ru',
            'Tel: (0322)4-56-98',
            'Vanadzor: Shinararneri 15 Street'
        ]
    }
    render() {
        return (
            <Container className="main2">
                <Row>
                    <Col md={7}></Col>
                    <Col className="_liitem">
                        <ul>
                            {this.state.toDoArray.map(item => {
		  		return <li key = {item}>{item}</li>;
		  	})}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { MainTabs };