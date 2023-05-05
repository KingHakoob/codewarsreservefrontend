import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/Components/LoginComponent/LoginComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import UserHomeComponent from './Components/UserHomeComponent/UserHomeComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CreateAccountComponent' element={<CreateAccountComponent />} />
          <Route path='/UserHomeComponent' element={<UserHomeComponent />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
