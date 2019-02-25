import React, { Component } from 'react';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import {Slider} from '../Slider/Slider';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Slider />
                <Lavaguynner />
            </div>
        );
    }
}

export {Content};