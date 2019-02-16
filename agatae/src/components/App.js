import React, { Component } from 'react';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Navbar} from './Navbar/Navbar';
import {Teacher_page} from './Teacher_page/Teacher_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
		<Teacher_page />
		<Lavaguynner />
      </div>
    );
  }
}

export default App;
