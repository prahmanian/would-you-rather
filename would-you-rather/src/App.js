import './App.css';
import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion'
import Dashboard from './components/Dashboard'
import Question from './components/Question';

import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    console.log(this.props)
    return (
      <div className="App">

        <Navbar />
        <LoadingBar />

        <Switch>

          <Route exact path='/'><Redirect to='/home' /></Route>
          <Route exact path='/home'>
            {this.props.authedUser ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
          </Route>

          <Route exact path='/login'><Login /></Route>
          <Route exact path='/leaderboard'><Leaderboard /></Route>
          <Route exact path='/add'><AddQuestion /></Route>
          <Route exact path='/dashboard'><Dashboard /></Route>
          <Route path='/questions/:id'><Question /></Route>

        </Switch>


      </div>
    );
  }  

}



export default connect(({authedUser}) => ({authedUser}))(App);