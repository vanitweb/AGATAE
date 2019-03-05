import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import {Messages} from '../../Messages';
import {
    Button,
    Container,
    Row, 
    Col,
    Table 
} from 'reactstrap';

@observer
class PersonalPageUsers extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
        const {teacher} = this.context.appStore;
        return (
            <Container>
                <Row className="justify-content-lg-left">    
                    <Col xs={8}>
                        <h5>{Messages.grafik}</h5>
                    </Col>
                    <Col>
                        <Table hover size="md">
                            <thead>
                                <tr>
                                    <th>{Messages.vandak}</th>
                                    <th>{Messages.day}</th>
                                    <th>{Messages.hour}</th>
                                    <th>{Messages.submit}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teacher.graphic.map((item, i) => {
                                    return(
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.day}</td>
                                            <td>{item.time}</td>
                                            <td><Button color="success">{Messages.submit}</Button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { PersonalPageUsers };