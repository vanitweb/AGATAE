
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {UIStore} from '../stores/UIStore';
import {AppStore} from '../stores/AppStore';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import '../../assets/styles/App.css';

const routes = [{
  path: '/',
  component: Content,
}, {
  path: '/lavaguynner',
  component: Lavaguynner,
}];

//const-@ routern em tnelu

@observer
class App extends Component {
	static childContextTypes = {
		uiStore: PropTypes.object,
		
	};

	getChildContext() {
		return {
			uiStore: new UIStore(),
			
		};
  	};
	
  render() {
    //ays constn em tanelu
        const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (

      <BrowserRouter>
      <div className="App">
  		<Navbare />
      //div-i parunakutyunn em tanelu
      <div>
      <Switch>
      {routeComponents}
      </Switch>
      </div>
  	  <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;