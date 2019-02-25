import React, {Component} from 'react';
import {Cards} from './Cards';
import art from '../../../assets/images/mix/art.jpg';
import education from '../../../assets/images/mix/education.jpg';
import science from '../../../assets/images/mix/science.jpg';
import sport from '../../../assets/images/mix/sport.jpg';

class Lavaguynner extends Component {
    arrayOfLavTeachers = [
        {
            photo: art,
            name: 'Ադրինե Սեթաղյան',
            subject: 'Արվեստ',
            aboutMe: 'Իմ մասին'
        },
        {
            photo: education,
            name: 'Թուխիկ Ղարագյոզյան',
            subject: 'Կրթություն',
            aboutMe: 'Իմ մասին'
        },
        {
            photo: science,
            name: 'Գոռ Մանուկյան',
            subject: 'Գիտություն',
            aboutMe: 'Իմ մասին'
        },
        {
            photo: sport,
            name: 'Էդգար Նիկողոսյան',
            subject: 'Սպորտ',
            aboutMe: 'Իմ մասին'
        }
    ];
    render() {
        return(
            <div className="container">
                <Cards arrayOfLavTeachers={this.arrayOfLavTeachers}/>
            </div>
        );
    }
}

export {Lavaguynner};