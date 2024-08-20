import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import { Routes, Route, Navigate } from "react-router-dom"
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Orders/Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app_content">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Navigate to="/list" />} />
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/orders' element={<Order />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
