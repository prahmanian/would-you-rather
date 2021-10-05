import './App.css';
import UserImage from './components/UserImage'
import {users} from './starter/_DATA'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />


      <UserImage user={users.tylermcginnis} round={"false"}/>
      <UserImage user={users.sarahedo}/>
      <UserImage user={users.johndoe} round={"false"}/>
    </div>
  );
}

export default App;
 