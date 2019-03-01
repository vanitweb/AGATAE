import React, {Component} from 'react';
import {Cards} from './Cards';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
    Container,
    Row
} from 'reactstrap';
@observer
class Lavaguynner extends Component { 
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    render() {
        const {subjectName} = this.context.appStore;
        return(

            <div className="container">
                <h1>{subjectName}</h1>
                <Cards bestTeachers={this.bestTeachers}/>
            </div>

        );
    }
}

export {Lavaguynner};