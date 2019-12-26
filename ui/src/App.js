import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Main from './layouts/Main';




export default class App extends Component  {
    render(){
      return (
        <div>
          <Router>
          <Fragment>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/" component={Main}/>
            </Fragment>
          </Router>
        </div>
    )
    }  
}

