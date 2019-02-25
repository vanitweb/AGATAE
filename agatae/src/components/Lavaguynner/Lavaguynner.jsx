import React, {Component} from 'react';
import {Cards} from './Cards';
import art from '../../../assets/images/mix/art.jpg';
import education from '../../../assets/images/mix/education.jpg';
import science from '../../../assets/images/mix/science.jpg';
import sport from '../../../assets/images/mix/sport.jpg';
import './Lavaguynner.css';

class Lavaguynner extends Component {    
    render() {
        return(
            <div className="container">
                <Cards bestTeachers={this.bestTeachers}/>
            </div>
        );
    }
}

export {Lavaguynner};