import React, { Component } from 'react';
import './App.css'
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Par} from './Par/Par';
import {BrowserRouter, Route} from 'react-router-dom'

import '../../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
  		<Header />
  		<Navbar />
      <div>
      <Route path='/glxavor'  component ={Content}/>
      <Route com='/lavaguynner'  component ={Lavaguynner} />
      </div>
	  <Footer />
    </div>
    </BrowserRouter>
    );
  }
}

export default App;