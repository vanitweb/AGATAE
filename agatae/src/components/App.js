import React, { Component } from 'react';
import {Header} from './Header/Header';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Navbar} from './Navbar/Navbar';
import {TeacherPage} from './TeacherPage/TeacherPage';
import {Slider} from './Slider/Slider';

import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import {UIStore} from '../stores/UIStore';

@observer
class App extends Component {
	uiStore = new UIStore();
  render() {
    return (
      <div className="App">
		<Header />
		<Navbar />
		<Slider />
		<TeacherPage />
		<Lavaguynner />
      </div>
    );
  }
}

export default App;
