import React from 'react';
import { Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import { RouteWithSubRoutes } from './modules/routes/RouteComponent'
import { mainRoutes } from './modules/routes/main'


function App() {
  return (
    <div className="App">
      <header >

      </header>
      <Switch>
      {mainRoutes.map((route, index) => {
      return (

          <RouteWithSubRoutes
            key={index}
            {...route}
          />
      )
      })
    }
    </Switch>

    </div>
  );
}

export default App;
