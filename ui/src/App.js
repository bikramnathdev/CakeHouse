import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/admin/auth/Login';
import Register from './components/admin/auth/Register';
import Main from './layouts/Main';
import Shop from './components/shop/Shop';




export default class App extends Component  {
    render(){
      return (
        <div>
          <Router>
          <Fragment>
                <Route exact path="/admin/login" component={Login}/>
                <Route exact path="/admin/register" component={Register}/>
                <Route exact path="/admin" component={Main}/>
                <Route exact path="/" component={Shop}/>
          </Fragment>
          </Router>
        </div>
    )
    }  
}

