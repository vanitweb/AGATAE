import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import {Slider} from '../Slider/Slider';

import {Messages} from '../../Messages';

@observer
class Content extends Component {
	static contextTypes = {
        appStore: PropTypes.object.isRequired
    };
	componentDidMount() {
		this.context.appStore.subjectName = Messages.arajatar;
	}
    render() {
        return (
            <div className="Content">
                <Slider />
                <Lavaguynner value={this.context.appStore.currentTeachers}/>
            </div>
        );
    }
}

export {Content};