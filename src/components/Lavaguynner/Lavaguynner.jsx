import React, {Component} from 'react';
import {Cards} from './Cards';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {Constants} from '../../Constants';
import s from '../../../assets/styles/Lavaguynner/Lavaguynner.module.css';

import {
    Container,
    Row
} from 'reactstrap';
@observer
class Lavaguynner extends Component { 
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
	componentWillMount() {
		if(!this.props.value) {
			this.context.appStore.subjectName = this.getKeyByValue(Constants, this.props.match.params.category);			
		}
	}
	getKeyByValue = (object, value) => {
		for(let prop in object) {
			if(object.hasOwnProperty(prop)) {
				 if(object[prop] === value)
					 return prop;
			}
		}
	}
    render() {
        const {subjectName} = this.context.appStore;
        return(

            <div className="container">
                <h1 className={s.center}>{subjectName}</h1>
                <Cards/>
            </div>

        );
    }
}

export {Lavaguynner};