const routes = [{
  path: '/',
  component: Content,
}, {
  path: '/lavaguynner',
  component: Lavaguynner,
}];

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);




export {Routes}