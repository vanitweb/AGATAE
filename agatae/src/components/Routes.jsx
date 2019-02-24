<<<<<<< HEAD
const routes = [{
  path: '/',
  component: Content,
}, {
  path: '/lavaguynner',
  component: Lavaguynner,
}];

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);




export {Routes}
=======
import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { SignIn } from './Navbar/SignIn';
import { SignUp } from './Navbar/SignUp';
import { Error } from './Error';
import { Content } from './Content/Content';
import { RegisterPage } from './Navbar/RegisterPage';


class Routes extends Component {
render() {
    return (
<BrowserRouter>
<div>
<SignUp/>
<Switch>
<Route path="/" component={Content} exact/>
<Route path="/register" component={RegisterPage}/>
<Route path="/login" component={SignIn}/>
<Route component={Error}/>
</Switch>
</div>

</BrowserRouter>
 
    );
  }
}

export {Routes};
>>>>>>> 0b3c517ee7e020505a9d3e7e93f136143f75c465
