import React, { Component } from 'react';

import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {UIStore} from '../stores/UIStore';
import {AppStore} from '../stores/AppStore';
import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {RegisterPage} from './Navbar/RegisterPage';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {ErrorPage} from './Error';

import './App.css';
import '../../assets/styles/App.css';

const routes = [{
    path: '/',
    component: Content
}, {
    path: '/lavaguynner',
    component: Lavaguynner
},
{
    path: '/register',
    component: RegisterPage
},
{
    component: ErrorPage
}];

//const-@ routern em tnelu

@observer
class App extends Component {
    constructor() {
        super();
        this.appStore = new AppStore();
        this.uiStore = new UIStore();
    }	
    static childContextTypes = {
        uiStore: PropTypes.object,
        appStore: PropTypes.object
    };
    getChildContext() {
        return {
            uiStore: this.uiStore,
            appStore: this.appStore
        };
    }
    componentDidMount() {
        this.appStore.initData();
    }
    render() {
        const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbare />
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