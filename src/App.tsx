import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Lounge from './pages/Lounge';
import 'typeface-roboto';
import 'typeface-lora';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-family: 'Lora', serif;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lounge" element={<Lounge />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
