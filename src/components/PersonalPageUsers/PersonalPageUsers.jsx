import React, { Component } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {
    Button,
    Container,
    Row, 
    Col,
    Table 
} from 'reactstrap';

import {Messages} from '../../Messages';

import {teachers} from '../../data/data.js';


import '../../../assets/styles/PersonalPageUsers/PersonalPageUsers.css';

@observer
class PersonalPageUsers extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
	onClick = (event) => {
		event.target.disabled = true;
		for(let i = 0; i <teachers.lenght; i++) {
			if(!document.cookie.email && !document.cookie.password) {
				return <h3>{Messages.dontRegister}</h3>;
			}
			else if(document.cookie.email === teachers[i].email && document.cookie.password === teacher[i].password){
				teacher[i].currentGraphic.push(teacher[i].graphic.day);
				teacher[i].currentGraphic.push(teacher[i].graphic.time);
				
				return teachers[i];
			}
		}
		console.log(teachers[0]);
	}
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
                                            <td><Button className="hertagrvel" onClick={this.onClick}>{Messages.submit}</Button></td>
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