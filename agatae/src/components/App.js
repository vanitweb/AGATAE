import React, { Component } from 'react';
import {Header} from './Header/Header';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
/*import {Navbar} from './Navbar/Navbar';*/
import {TeacherPage} from './TeacherPage/TeacherPage';
import {Slider} from './Slider/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header />
		<Slider />
		<TeacherPage />
		<Lavaguynner />
      </div>
    );
  }
}

export default App;