import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Welcome from './component/Welcome';
import Navbar from './component/Navbar';
import Home from './component/Home';
import DSA from './component/DSA';
import FullStack from './component/FullStack';
import Journey from './component/Journey';
import ContactUs from './component/ContactUs';
import ErrorPage from './component/ErrorPage';

function AppContent() {
  const [showMain, setShowMain] = useState(false);
  const navigate = useNavigate();

  const handleEnterPortfolio = () => {
    if (!showMain) {
      setShowMain(true);
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="App">
      {!showMain ? (
        <Welcome onScroll={handleEnterPortfolio} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DSA" element={<DSA />} />
            <Route path="/FullStack" element={<FullStack />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
