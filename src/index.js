import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from './Reducer';
import {StateProvider} from './StateProvider';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export default App;



// // var React = require('react');
// import React from 'react';
// // var ReactDom = require('react-dom');
// import ReactDom from 'react-dom';


// // ReactDom.render('kya dikhana hai', 'kaha dikhana hai','callback function');
// // We need to import react to use this JSX expression like "<h1>hi</h1>" otherwise 
// // we have to use document.createElement here;
// ReactDom.render(<h1>hi</h1>,document.getElementById('root'));
// // Babel is very important here. It is a javascript compiler which convert 
// // modern ES6 javascript to PURE JavaScript


// // to use multiple elements in rendor method wrap them in single tag or 
// // we can return array of elements
// const name = 'anshul';
// ReactDom.render(
//                 <App/>
//                 ,document.getElementById('root'));
// // {} in these we can use javascript inside a html we can add, sub, mul etc;













