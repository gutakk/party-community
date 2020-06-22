import { Redirect, Route, Switch } from 'react-router-dom'
import React from 'react';
import Login from './pages/login'
import PartyCreation from './pages/partyCreation'
import PartyList from './pages/partyList'
import Register from './pages/register'
import './App.scss'


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      <Switch>
          <Route path='/register'><Register/></Route>
          <Route path='/login'>{token ? <Redirect to=''/> : <Login/>}</Route>
          <Route path='/create-party'>{token ? <PartyCreation/> : <Redirect to='/login'/>}</Route>
          <Route path='/'><PartyList/></Route>
          <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
