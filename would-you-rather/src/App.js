import './App.css';
import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {users, questions} from './starter/_DATA'
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Leaderboard from './components/Leaderboard'
// import AddQuestion from './components/AddQuestion'
// import Dashboard from './components/Dashboard'
// import Question from './components/Question';

import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const store = {
      authedUser: 'tylermcginnis',
      users,
      questions
    }
    return (
      <div className="App">

        {/* <Navbar user={users[store.authedUser]}/> */}
        <Navbar />

        <Switch>

          {/* <Route exact path='/'><Redirect to='/home' /></Route>
          <Route exact path='/home'>
            {store.authedUser ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
          </Route> */}

          {/* <Route exact path='/login'><Login store={store} /></Route> */}
          {/* <Route exact path='/leaderboard'><Leaderboard store={store}/></Route> */}
          {/* <Route exact path='/add'><AddQuestion store={store}/></Route> */}
          {/* <Route exact path='/dashboard'><Dashboard authUser={store.authUser} store={store}/></Route> */}
          {/* <Route exact path='/questions/:id'><Question store={store}/></Route> */}

        </Switch>


        {/*  */}
        {/* <Question /> */}

      </div>
    );
  }  

}



export default connect()(App);