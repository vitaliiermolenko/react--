import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Comment from './Comments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/comments" element={<Comment />} />
      </Routes>
    </Router>
  );
}

export default App;
