import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './Lavaguynner.css';
import { 
    Card,
    Button,
    CardImg,
    CardTitle,
    CardDeck,
    CardSubtitle,
    CardBody
} from 'reactstrap';

@observer
class Cards extends Component {
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
        const {bestTeachers} = this.context.appStore;
        return(
            <CardDeck>
                {bestTeachers.map((item,i) => {
                    return (
                        <Card key={i} style={{backgroundColor:'#FFFFD2'}}>
                            <CardImg top width="100%" src={bestTeachers[i].photo}/>
                            <CardBody key={i} >
                                <CardTitle key={i}>{bestTeachers[i].name}</CardTitle>
                                <CardSubtitle key={i}>{bestTeachers[i].subject}</CardSubtitle>
                                <Button key={i} color="success" >{bestTeachers[i].aboutMe}</Button>
                            </CardBody>
                        </Card>
                    );
                })}
            </CardDeck>
        );
    }
}

export {Cards};