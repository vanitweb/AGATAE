import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


class Cards extends Component {

    render() {
		const{arrayOfLavTeachers} = this.props;
        return(
            <CardDeck>
                {arrayOfLavTeachers.map((item,i) => {
                    return (
						<Card key={i}>
							<img top width="100%" src={arrayOfLavTeachers[i].photo}/>
							<CardBody key={i}>
								<CardTitle key={i}>{arrayOfLavTeachers[i].name}</CardTitle>
								<CardSubtitle key={i}>{arrayOfLavTeachers[i].subject}</CardSubtitle>

								<Button key={i} color="info">{arrayOfLavTeachers[i].aboutMe}</Button>
							</CardBody>
						</Card>
					)
                })}
            </CardDeck>
        );
    }
}

export {Cards};