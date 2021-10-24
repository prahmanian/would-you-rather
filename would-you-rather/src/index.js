import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter }  from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/'
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('would-you-rather-state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const store = createStore(reducer, composeWithDevTools(middleware))

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


