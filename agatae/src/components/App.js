
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import {UIStore} from '../stores/UIStore';
import './App.css';

import {Header} from './Header/Header';
import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Par} from './Par/Par';
import {Slider} from './Slider/Slider';
import '../../assets/styles/App.css';

@observer
class App extends Component {
	getChildContext() {
		return {
			myStore: new UIStore()
		};
  	};
  render() {
    return (
      <BrowserRouter>
      <div className="App">
  		<Header />
  		<Navbare />
      <Slider />
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