import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Welcome from './component/Welcome';
import DSA from './component/DSA';
import FullStack from './component/FullStack';
import Journey from './component/Journey';
import ContactUs from './component/ContactUs';
import ErrorPage from './component/ErrorPage';
import Profile from './component/Profile';
 // Optional

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleScroll = () => {
    if (!showMain) setShowMain(true);
  };

  return (
   
    <div className="App">
      {!showMain ? (
        <Welcome onScroll={handleScroll} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/Profile' element={<Profile/>}/> */}
            <Route path="/DSA" element={<DSA />} />
            <Route path="/FullStack" element={<FullStack />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </BrowserRouter>
      )}
      </div>
   
  );
}

export default App;
