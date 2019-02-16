import React, { Component } from 'react';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Navbar} from './Navbar/Navbar';
import {TeacherPage} from './TeacherPage/TeacherPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
		<TeacherPage />
		<Lavaguynner />
      </div>
    );
  }
}

export default App;
