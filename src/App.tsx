import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import TestGetCodeWarsUserData from './Components/TESTING CodewarsAPI/UserData';
import TestGetCodeWarsUserCompleted from './Components/TESTING CodewarsAPI/UserCompleted';
import TestGetCodeWarsUserAuthored from './Components/TESTING CodewarsAPI/UserAuthored';
import TestGetCodeWarsKata from './Components/TESTING CodewarsAPI/GetKata';
import TestBoard from './Components/TestBoard';
import TESTINGUserInfo from './Components/TESTINGUserInfo/TESTINGuserinfo';
import UserHomeComponent from './Components/UserHomeComponent/UserHomeComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<CreateAccountComponent />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserData />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserCompleted />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsUserAuthored />} /> */}
          {/* <Route path='/' element={<TestGetCodeWarsKata />} /> */}
          <Route path='/' element={<TestBoard />} />
          {/* <Route path='/TESTINGUserInfo' element={<TESTINGUserInfo />} /> */}
          <Route path='/UserHomeComponent' element={<UserHomeComponent />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
