import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
