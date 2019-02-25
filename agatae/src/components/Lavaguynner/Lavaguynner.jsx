import React, {Component} from 'react';
import {Cards} from './Cards';
<<<<<<< HEAD
=======
import art from '../../../assets/images/mix/art.jpg';
import education from '../../../assets/images/mix/education.jpg';
import science from '../../../assets/images/mix/science.jpg';
import sport from '../../../assets/images/mix/sport.jpg';
import './Lavaguynner.css';
>>>>>>> d677b4629a5b58674c1ca9b386bcd8c4167fcfea

class Lavaguynner extends Component {
    
    render() {
        return(
<<<<<<< HEAD
            <div className="container">
                <Cards bestTeachers={this.bestTeachers}/>
=======
            <div className="containerL">
                <Cards arrayOfLavTeachers={this.arrayOfLavTeachers}/>
>>>>>>> d677b4629a5b58674c1ca9b386bcd8c4167fcfea
            </div>
        );
    }
}

export {Lavaguynner};