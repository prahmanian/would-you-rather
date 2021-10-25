import './App.css';
import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion'
import Dashboard from './components/Dashboard'
import Question from './components/Question';
import NotFound from './components/utils/NotFound';
import { connect } from 'react-redux'
import { handleInitialData, handleLoadFromSession } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import AddUser from './components/AddUser';
import PrivateRoute from './components/utils/PrivateRoute'
import Refresh from './components/utils/Refresh'

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
          <PrivateRoute exact path='/leaderboard'><Leaderboard /></PrivateRoute>
          <PrivateRoute exact path='/add'><AddQuestion /></PrivateRoute>
          <PrivateRoute exact path='/dashboard'><Dashboard /></PrivateRoute>
          <PrivateRoute path='/questions/:id'><Question /></PrivateRoute>
          <PrivateRoute path='/questions'><Redirect to='/dashboard' /></PrivateRoute>
          <Route exact path='/signup'><AddUser /></Route>

          <Route path='/refresh/:path'><Refresh /></Route>
          <Route path="*" render={(props) => <NotFound {...props} /> }/>


        </Switch>



      </div>
    );
  }  

}

function mapStateToProps({authedUser, users}){
    return {authedUser, users}
}
export default connect(mapStateToProps)(App)