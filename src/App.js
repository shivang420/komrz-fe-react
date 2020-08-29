import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import routes from './routes';
import Admin from './Components/layout/admin';
import Contract from './Components/SideBar/contract';

const switchRoutes = (
  <Router>
    <Switch>
      {routes.map((prop, key) => {
        return (
          <Route
            path={prop.link}
            component={prop.component}
            key={key}
          />
        );
      })}
      <Redirect from="/" to="/dashboard/financial" />
    </Switch>
  </Router>
);

console.log(switchRoutes);

function App() {

  console.log(routes);

  return (
    <>
      <div className="mainContainer">
          <Admin />
          <div className="mainContent">
            Mina
            <Switch>
              <Route path="/contracts" exact component={Contract}/>
            </Switch>
          </div>
      </div>
    </>
  );
}

export default App;
