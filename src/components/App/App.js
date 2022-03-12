import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../../index.css'
import Dashboard from '../Dashboard/Dashboard.js';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard date="Mar 13th, 2022"
                               task="Personal Research"
                               edits="4"
                               comments="6"/>}>        
          </Route>       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
