import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import tStyle from '../TeacherPage/css/style.module.css';

@observer
class MainTabs extends Component {
	static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
		const {teacher} = this.context.appStore;
        return (
            <Container className="main2">
                <Row>
                    <Col md={7}></Col>
                    <Col className={tStyle._liitem}>
                        <ul>
                            <li>{teacher.email}</li>
                            <li>{teacher.phone}</li>
                            <li>{teacher.hasce}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { MainTabs };