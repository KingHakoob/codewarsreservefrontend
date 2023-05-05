import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import UserHomeComponent from './Components/UserHomeComponent/UserHomeComponent';
import KataCardComponent from './Components/KataCardComponent/KataCardComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<CreateAccountComponent />} /> */}
          {/* <Route path='/UserHomeComponent' element={<UserHomeComponent />} /> */}
          <Route path='/' element={<KataCardComponent />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
