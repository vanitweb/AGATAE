import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import s from'./Lavaguynner.module.css';
import { Container, Row, Col } from 'reactstrap';
import { 
    Card,
    Button,
    CardImg,
    CardTitle,
    CardDeck,
    CardSubtitle,
    CardBody,
} from 'reactstrap';

@observer
class Cards extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
	
	/*onClick = (event) => {
		this.context.appStore.currentTarget = event.currentTarget.getAttribute('data-option')
	}*/
	
    render() {
        const {bestTeachers} = this.context.appStore;
        return(
            <CardDeck>
                {bestTeachers.map((item,i) => {
                    return (
                        <Col key={i} sm={6} md={4} lg={3} className="pt-4">
                            <Card style={{backgroundColor:'#FFFFD2'}}>
                                <CardImg top width="100%" src={item.photo}/>
                                <CardBody >
                                    <CardTitle className={s.font}>{item.name}</CardTitle>
                                    <CardSubtitle className={s.font}>{item.subject}</CardSubtitle>
                                    <Button data-option={i} onClick={this.onClick} color="success" >{item.aboutMe}</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </CardDeck>
        );
    }
}

export {Cards};