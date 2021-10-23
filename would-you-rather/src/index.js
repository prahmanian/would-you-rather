import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter }  from 'react-router-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/'
import {middlewares} from './middleware'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit'
import authedUser from './reducers/authedUser';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('would-you-rather-state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    // const stateString = localStorage.getItem('would-you-rather-state');
    // return stateString ? JSON.parse(stateString) : undefined;
    const usersString = localStorage.getItem('would-you-rather-users');
    const questionsString = localStorage.getItem('would-you-rather-questions');
    const authedUserString = localStorage.getItem('would-you-rather-authedUser');
    return {
      users: usersString ? JSON.parse(usersString) : undefined ,
      questions: questionsString ? JSON.parse(questionsString) : undefined ,
      authedUser: authedUserString ? JSON.parse(authedUserString) : undefined ,
    }

  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();


// const store = createStore(reducer, composeWithDevTools(middleware))
const store = configureStore({
  reducer, 
  middlewares, 
  persistedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})

ReactDOM.render(
  <Provider store={store}>

      <BrowserRouter>
        <App />
      </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);


