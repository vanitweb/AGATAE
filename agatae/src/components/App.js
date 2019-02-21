
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import {UIStore} from '../stores/UIStore';
import './App.css';

import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {Par} from './Par/Par';
import {Slider} from './Slider/Slider';
import '../../assets/styles/App.css';

@observer
class App extends Component {
	static childContextTypes = {
		uiStore: PropTypes.object
	};

	getChildContext() {
		return {
			uiStore: new UIStore()
		};
  	};
	
  render() {
    return (
      <BrowserRouter>
      <div className="App">
  		<Navbare />
      <Slider />
      <div>
      <Route path='/glxavor'  component ={Content}/>
      <Route com='/par'  component ={Lavaguynner} />
      </div>
	  <Footer />
    </div>
    </BrowserRouter>
    );
  }
}

export default App;