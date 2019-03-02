import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import tStyle from '../TeacherPage/css/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <Col>
                        <ul>
                            <li><FontAwesomeIcon icon="address-book" /></li>
                            <li><FontAwesomeIcon icon="phone" /></li>
                            <li><FontAwesomeIcon icon="map-marker-alt"/></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { MainTabs };