import React from 'react';
import { Route, Switch} from 'wouter';

import Login from './components/Login/LoginContainer';
import Principal from './components/Principal/PrincipalContainer';
import UserContextProvider from './context/UserContext';

import './App.css';


function App() {

  return (
    <UserContextProvider>
      <Switch>  
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/inicio">
          <Principal/>
        </Route>
      </Switch>
    </UserContextProvider>
  );
}

export default App;
