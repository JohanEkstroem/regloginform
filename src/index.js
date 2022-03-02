/* import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Register from './components/register';
import Header from './components/header';
import Blablabla from './components/bootstrapnavbar';

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      {/*  <Register /> }*/
/* </div>
  );
}; */
/* ReactDOM.render(<App />, document.querySelector('#root')); */

import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from '../src/components/register';
import Login from '../src/components/login';
/* import Validation from './components/validation'; */

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
