import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import TestGetCodeWarsUserData from './Components/TESTING CodewarsAPI/UserData';
import TestGetCodeWarsUserCompleted from './Components/TESTING CodewarsAPI/UserCompleted';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<CreateAccount />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserData />} /> */}
          <Route path='/' element={<TestGetCodeWarsUserCompleted />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
