import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import {Cards} from './Cards';

import {Constants} from '../../Constants';

import '../../../assets/styles/Lavaguynner/Lavaguynner.css';

@observer
class Lavaguynner extends Component { 
    static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
    componentDidMount() {
        if(!this.props.value) {
            this.context.appStore.subjectName = this.context.appStore.getKeyByValue(Constants, this.props.match.params.category);	
        }
    }
    componentDidUpdate(prevProps) {
        if(!this.props.value){
            if(prevProps.category !== this.props.match.params.category) {
                this.context.appStore.subjectName = this.context.appStore.getKeyByValue(Constants, this.props.match.params.category);
            }
        }}
    render() {
        const {subjectName} = this.context.appStore;
        return(
            <div className="container">
                <h1 className='subject'>{subjectName}</h1>
                <Cards/>
            </div>
        );
    }
}

export {Lavaguynner};