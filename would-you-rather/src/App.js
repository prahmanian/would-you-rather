import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import {users} from './starter/_DATA'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion'
import Dashboard from './components/Dashboard'
import Question from './components/Question';


function App() {
  const authUser = 'tylermcginnis'
  return (
    <div className="App">

      <Navbar user={users[authUser]}/>

      <Switch>

        <Route exact path='/'><Redirect to='/home' /></Route>
        <Route exact path='/home'>
          {authUser ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
        </Route>

        <Route exact path='/login' component={Login} />
        <Route exact path='/leaderboard'><Leaderboard users={users} /></Route>
        <Route exact path='/add' component={AddQuestion} />
        <Route exact path='/dashboard'><Dashboard authUser={authUser} /></Route>
        <Route exact path='/questions/:id'><Question /></Route>

      </Switch>


      {/*  */}
      {/* <Question /> */}

    </div>
  );
}

export default App;