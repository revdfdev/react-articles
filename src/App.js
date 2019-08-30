import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from "./components/Register";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Redirect from="/" to={localStorage.getItem("token") ? "/homepage" : "/login"} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    )
  }

}


export default App;