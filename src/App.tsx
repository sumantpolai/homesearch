import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './components/Auth';
import ListProperty from './components/ListProperty';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/list-property" element={<ListProperty />} />
      </Routes>
    </Router>
  );
}

export default App;