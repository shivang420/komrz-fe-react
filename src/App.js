import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Switch, Route ,Redirect } from 'react-router-dom';
// import routes from './routes';
import Contract from './Components/SideBar/Contracts/Contract.js';
import Events from './Components/SideBar/Events/Events.js';
import NavBar from './Components/layout/NavBar.js';
import Header from './Components/layout/Header.js';

// const switchRoutes = (
//   <Router>
//     <Switch>
//       {routes.map((route, key) => {
//         return (
//           <Route
//             path={route.link}
//             component={route.component}
//             key={key}
//           />
//         );
//       })}
//       <Redirect from="/" to="/dashboard/financial" />
//     </Switch>
//   </Router>
// );

// console.log(switchRoutes);

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="sidebar">
          {/* <Admin /> */}
          <NavBar />
        </div>
        <div className="mainContent">
          <div className="header">
            <Header/>
          </div>
          <div className="innerContent">
            <Switch>
              <Redirect from="/" to="/dashboard/financial" exact strict/>
              <Route path="/events" exact component={Events}/>
              <Route path="/contracts" exact component={Contract}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
