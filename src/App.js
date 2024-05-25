import logo from './logo.svg';
import './App.css';
import { SignUp } from './component/SignUp.jsx';
import { Table } from './component/Table.jsx';
import { SignIn } from './component/SignIn.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute.js';
import { useState } from 'react';
function App() {
  const [userData,setUserData]=useState('');
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn
        userData={userData}
        setUserData={setUserData}
        />}/>
        <Route path="/home" element={
        <ProtectedRoute userData={userData}>
        <Table/>
        </ProtectedRoute>
        }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
