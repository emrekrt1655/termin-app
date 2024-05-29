import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import FirmProfile from './components/profile/FirmProfile';
import FirmPage from './pages/FirmPage';
import HomePage from './pages/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/firm-profile" element={<FirmProfile />} />
        <Route path="/firm/:id" element={<FirmPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
