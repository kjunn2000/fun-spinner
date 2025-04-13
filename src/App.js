import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dest from './pages/Dest';
import Header from './component/Header/Header';
import { getMelbourneImageUrls, getOsakaImageUrls, getPerthImageUrls, getSydneyImageUrls } from './utils/imageUtils';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/one" element={<Dest fileNames={getOsakaImageUrls()}/>} />
        <Route path="/two" element={<Dest fileNames={getPerthImageUrls()}/>} />
        <Route path="/three" element={<Dest fileNames={getSydneyImageUrls()}/>} />
        <Route path="/four" element={<Dest fileNames={getMelbourneImageUrls()}/>} />
      </Routes>
    </Router>
  );
};

export default App;
