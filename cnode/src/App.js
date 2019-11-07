import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route,Switch,Redirect}from 'react-router-dom'
import About from "./container/About";
import Api from "./container/Api";
import Start from "./container/Start";
import Home from "./container/Home";
import Content from './Home/Content';
import Signin from './container/Signin';
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
                            <Route path='/signin' component={Signin}/>
                        </Switch>
                    </div>
                    <div className='right'>
                        <h3 style={{margin:'130px 30px 0'}}>Node.js专业中文社区</h3>
                    </div>
                   
                </div>
            </Router>
        )
    }
}

