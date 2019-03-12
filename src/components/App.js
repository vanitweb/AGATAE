import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {UIStore} from '../stores/UIStore';
import {AppStore} from '../stores/AppStore';
import {UserStore} from '../stores/UserStore';

import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {RegisterPage} from './Navbar/RegisterPage';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {ErrorPage} from './Error';
import {TeacherPage} from './TeacherPage/TeacherPage';
import { Icons } from '../components/Navbar/Icons/Icons';

import '../../assets/styles/App.css';

const routes = [
    {
        path: '/',
        component: Content
    },
    {
        path: '/lavaguynner',
        component: Lavaguynner
    },
    {
        path: '/teachers/:category?',
        component: Lavaguynner
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/teacherPage/:username',
        component: TeacherPage
    },
    {
        component: ErrorPage
    }
];

@observer
class App extends Component {
    state ={
        sideDrowOpen: false
    }
    constructor() {
        super();
        this.appStore = new AppStore();
        this.uiStore = new UIStore();
        this.userStore = new UserStore();
    }	
    static childContextTypes = {
        uiStore: PropTypes.object,
        appStore: PropTypes.object,
        userStore: PropTypes.object
    };
    getChildContext() {
        return {
            uiStore: this.uiStore,
            appStore: this.appStore,
            userStore: this.userStore
        };
    }
    componentDidMount() {
        this.appStore.initData();
    }
    render() {
        const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
        return (
            <BrowserRouter>
                {this.appStore.isDataInitialized && <div className="App">
                    <Navbare />
                    <div className="appContent">
                        <Switch>
                            {routeComponents}
                        </Switch>
                    </div>
                    <Footer />
                </div>
                }
            </BrowserRouter>              
        );
    }
}

export default App;