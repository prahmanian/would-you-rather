import './App.css';
import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion'
import Dashboard from './components/Dashboard'
import Question from './components/Question';
import NotFound from './components/NotFound';
import { connect } from 'react-redux'
import { handleInitialData, handleLoadFromSession } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import AddUser from './components/AddUser';

class App extends Component {

  componentDidMount() {
    const localUsers = JSON.parse(localStorage.getItem('would-you-rather-users'))

    if (!localUsers) {
      console.log("Initial Data Load")
      this.props.dispatch(handleInitialData())
    }

    else if (Object.keys(localUsers).length > 0) {
      console.log("Data Loaded from Local Storage")
      this.props.dispatch(handleLoadFromSession())
    }
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
          <Route path='/questions'><Redirect to='/dashboard' /></Route>
          <Route exact path='/signup'><AddUser /></Route>

          <Route path="*"> <NotFound /> </Route>


        </Switch>


      </div>
    );
  }  

}

function mapStateToProps({authedUser, users}){
    return {authedUser, users}
}
export default connect(mapStateToProps)(App)