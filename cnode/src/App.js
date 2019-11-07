import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route,Switch,Redirect}from 'react-router-dom'
import About from "./container/About";
import Api from "./container/Api";
import Start from "./container/Start";
import Home from "./container/Home";
import Content from './Home/Content';
import Register from './container/Register';
export default class App extends Component {
    render() {
        return (
            <Router basename='build'>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='left'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from='/' to='/home/all/1'/>}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route  path='/content/:id' component={Content}/>
                            <Route path='/register' component={Register}/>
                        </Switch>
                    </div>
                    <div className='right'>
                        <h3 style={{margin:'130px 10px 0'}}>乘舟侧畔千帆过,病树前头万木春</h3>
	                    <h3 style={{margin:'130px 10px 0'}}>乘风破浪会有时，直挂云帆济沧海</h3>
                    </div>
                   
                </div>
            </Router>
        )
    }
}

