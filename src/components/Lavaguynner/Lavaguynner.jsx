import React, {Component} from 'react';
import {Cards} from './Cards';

import {
    Container,
    Row
} from 'reactstrap';

class Lavaguynner extends Component {   
    render() {
        return(

            <div className="containerL">
                <Cards bestTeachers={this.bestTeachers}/>
            </div>

        );
    }
}

export {Lavaguynner};