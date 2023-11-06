import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import PhotoPage from './pages/PhotoPage';
import CommentPage from './pages/CommentPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/comments" element={<CommentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
