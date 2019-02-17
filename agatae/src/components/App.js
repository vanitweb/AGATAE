import React, { Component } from 'react';
import {Header} from './Header/Header';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Navbar} from './Navbar/Navbar';
import {TeacherPage} from './TeacherPage/TeacherPage';
import {Slider} from './Slider/Slider';

import '../../assets/styles/App.css';

class App extends Component {
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