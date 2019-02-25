import React, {Component} from 'react';
import {Cards} from './Cards';

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