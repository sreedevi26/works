import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
// import Home from './Home';
// import Registration from './Registration';
// import TransactionHistory from './TransactionHistory';

class App extends React.Component{
  render(){
  return (
    
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/" exact={true}>
         <Home/>
        </Route>
        {/* <Route path="/home">
           <Home/>
        </Route> */}
        {/* <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/history">
          <TransactionHistory/>
        </Route> */}
        </Switch>
        </div>
      </BrowserRouter>
  );
}
}
export default App;
