import React, { Component } from 'react';
import './App.css'
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Content} from './Content/Content';
import {Par} from './Par/Par';
import {BrowserRouter, Route} from 'react-router-dom'

import '../../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
  		<Header />
  		<Navbar />
      <div>
      <Route path='/glxavor'  component ={Content}/>
      <Route com='/par'  component ={Par} />

	
      
=======
		<Header />
		<Navbar />
		<Slider />
		<TeacherPage />
		<Lavaguynner />
>>>>>>> 16393658f5ceb4eb44f5402c8660e882bc531f80
      </div>
	  
    </div>
    </BrowserRouter>
    );
  }
}

export default App;