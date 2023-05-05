
import './App.css';
import '../src/Components/LoginComponent/LoginComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';
import Login from './Components/LoginComponent/LoginComponent';
import UserHomeComponent from './Components/UserHomeComponent/UserHomeComponent';
import AdminComponent from './Components/AdminComponent/AdminComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CreateAccountComponent' element={<CreateAccountComponent />} />
          <Route path='/UserHomeComponent' element={<UserHomeComponent />} />
          <Route path='/AdminComponent' element={<AdminComponent />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
