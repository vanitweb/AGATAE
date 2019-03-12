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
class PersonalPageTeachers extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
		/*const {teacher[i]} = this.props;*/
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
                                    <th>{Messages.pupilsName}</th>
                                    <th>{Messages.mail}</th>
									<th>{Messages.phoneNum}</th>
									<th>{Messages.day}</th>
									<th>{Messages.hour}</th>
									<th>{Messages.toRegister}</th>
								 </tr>
                            </thead>
                            <tbody>
                                {teacher.currentGraphic.map((item, i) => {
                                    return(
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
											<td>{item.phone}</td>
											<td>{item.day}</td>
											<td>{item.time}</td>
                                            <td>
											    <Button color="info">
											        {Messages.confirm}
												</Button>
												<Button color="info">    {Messages.cansel}
												</Button>
											</td>
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

export { PersonalPageTeachers };