import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
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
                        <h5>Պարապունքների գրաֆիկ</h5>
                    </Col>
                    <Col>
                        <Table hover size="մդ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ՕՐ</th>
                                    <th>Ժամ</th>
                                    <th>Հերթագրվել</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teacher.graphic.map((item, i) => {
                                    return(
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.day}</td>
                                            <td>{item.time}</td>
                                            <td><Button color="success">Հերթագրվել</Button></td>
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