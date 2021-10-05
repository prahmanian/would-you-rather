import './App.css';
import UserImage from './components/UserImage'
import {users} from './starter/_DATA'
import Navbar from './components/Navbar';
// import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar user={users.tylermcginnis}/>


      <UserImage user={users.tylermcginnis} />
      <UserImage user={users.sarahedo}/>
      <UserImage user={users.johndoe} />

      {/* <Login /> */}
    </div>
  );
}

export default App;
 