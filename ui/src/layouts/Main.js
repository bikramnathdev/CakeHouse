import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Cakelist from '../components/admin/Cakelist';
import Dashboard from '../components/admin/Dashboard';

export default class Main extends Component {
    render() {
        return (
            <div>
            <Router>
                <Header/>
                <Menu/>
                    <Route exact path="/cakelist" component={Cakelist}/>
                    <Route exact path="/" component={Dashboard}/>
                <Footer/>
            </Router>
            </div>
        )
    }
}
