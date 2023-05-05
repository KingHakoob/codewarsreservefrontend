import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/Components/LoginComponent/LoginComponent.css'
import '../src/Components/RandomChallenge/RandomChallenge.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import TestGetCodeWarsUserData from './Components/TESTING CodewarsAPI/UserData';
import TestGetCodeWarsUserCompleted from './Components/TESTING CodewarsAPI/UserCompleted';
import TestGetCodeWarsUserAuthored from './Components/TESTING CodewarsAPI/UserAuthored';
import TestGetCodeWarsKata from './Components/TESTING CodewarsAPI/GetKata';
import RandomChallenge from './Components/RandomChallenge/RandomChallenge'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<CreateAccountComponent />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserData />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserCompleted />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserAuthored />} /> */}
          <Route path='/' element={<RandomChallenge/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
