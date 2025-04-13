import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestOne from './pages/DestOne';
import Header from './component/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/one" element={<DestOne/>} />
        <Route path="/two" element={<HomePage />} />
        <Route path="/three" element={<HomePage />} />
        <Route path="/four" element={<HomePage />} />
        <Route path="/five" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
