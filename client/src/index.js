import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM helps to run our project on browser
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';//we can wrap our whole app
const root = ReactDOM.createRoot(document.getElementById('root'));//root is the parent tag & elements gets appended
//inside the root element
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


reportWebVitals();
