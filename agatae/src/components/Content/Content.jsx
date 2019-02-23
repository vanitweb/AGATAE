import React, { Component } from 'react';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';

import {TeacherPage} from '../TeacherPage/TeacherPage';
import {Slider} from '../Slider/Slider';
import {Parapmunqner} from '../Parapmunqner/Parapmunqner';


class Content extends Component {
    render() {
        return (
            <div className="Content">  		
                <Parapmunqner />
                <Slider />
                <TeacherPage />
                <Lavaguynner />
            </div>
        );
    }
}
export {Content};

