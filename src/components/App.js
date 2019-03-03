import React, { Component } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UIStore} from '../stores/UIStore';
import {AppStore} from '../stores/AppStore';
import {UserSrore} from '../stores/UserSrore';
import {Navbare} from './Navbar/Navbare';
import {Content} from './Content/Content';
import {Footer} from './Footer/Footer';
import {RegisterPage} from './Navbar/RegisterPage';
import {Lavaguynner} from './Lavaguynner/Lavaguynner';
import {ErrorPage} from './Error';
import {TeacherPage} from './TeacherPage/TeacherPage';
import '../../assets/styles/App.css';
import { Icons } from '../components/Navbar/Icons/Icons';



const routes = [{
    path: '/',
    component: Content
}, {
    path: '/lavaguynner',
    component: Lavaguynner
},
{
    path: '/:navName/:category',
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
}];

@observer
class App extends Component {
    state ={
        sideDrowOpen: false
    }
    constructor() {
        super();
        this.appStore = new AppStore();
        this.uiStore = new UIStore();
		/*this.userStore = new UserSrore();*/
    }	
    static childContextTypes = {
        uiStore: PropTypes.object,
        appStore: PropTypes.object,
		/*userStore: PropTypes.object*/
    };
    getChildContext() {
        return {
            uiStore: this.uiStore,
            appStore: this.appStore,
			/*userStore: this.userStore*/
        };
    }
    componentDidMount() {
        this.appStore.initData();
    }


    drawClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrowOpen: !prevState.sideDrowOpen};
        });
    };

    backdropClickHendler = () => {
        this.setState({sideDrowOpen: false});
    };


    render() {
        let backDrop;

        if (this.state.sideDrowOpen) {
            backDrop = <BackDrop click={this.backdropClickHendler}/>;
        }

        const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
        return (

            <BrowserRouter>
                <div className="App">
                    <Navbare drawClick={this.drawClickHandler} />
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