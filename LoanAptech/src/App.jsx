import React from 'react';
import { useState } from 'react';
import './App.css';
import About from '../components/About';
import Privacy from '../components/Privacy';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About />
    <Privacy />
    </>
  );
}

export default App
