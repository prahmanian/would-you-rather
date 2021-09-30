import logo from './logo.svg';
import './App.css';
import UserImage from './Components/UserImage'
import {users} from './starter-code/_DATA'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserImage user={users.tylermcginnis} round={"false"}/>
      <UserImage user={users.sarahedo}/>
      <UserImage user={users.johndoe} round={"false"}/>
    </div>
  );
}

export default App;
