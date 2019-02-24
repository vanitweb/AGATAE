import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import {TeacherPage} from '../TeacherPage/TeacherPage';
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

