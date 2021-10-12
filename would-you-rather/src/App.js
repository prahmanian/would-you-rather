import './App.css';
// import UserImage from './components/UserImage'
import {users} from './starter/_DATA'
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Leaderboard from './components/Leaderboard'
// import AddQuestion from './components/AddQuestion'
// import Question from './components/Question'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
      <Navbar user={users.sarahedo}/>


      {/* <UserImage user={users.tylermcginnis} />
      <UserImage user={users.sarahedo}/>
      <UserImage user={users.johndoe} /> */}

      {/* <Login /> */}

      {/* <Leaderboard users={users} /> */}
      {/* <Question /> */}
      <Dashboard authUser={users.sarahedo} />
    </div>
  );
}

export default App;