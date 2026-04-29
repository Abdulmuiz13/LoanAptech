import React from 'react';
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Faq from './components/FAQ';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App
