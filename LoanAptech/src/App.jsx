import React from 'react';
import { useState } from 'react';
import About from '../components/About';
import Privacy from '../components/Privacy';
import Footer from '../components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <About />
      <Privacy />
      <Footer />
    </div>
  );
}

export default App
