import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AdminPage from './components/AdminPage/AdminPage/AdminPage';
import CustomerPage from './components/CustomerPage/CustomerPage/CustomerPage';

import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
    <Router >
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute exact path="/customerPage">
          <CustomerPage></CustomerPage>
        </PrivateRoute>
        <PrivateRoute exact path="/adminPage">
          <AdminPage></AdminPage>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
