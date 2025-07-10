import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Merch from './pages/Merch';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Todo from './pages/Todo'; // ✅ Lab 3: Todo List page

function App() {
  return (
    <Router>
      <div>
        <h1>Kitty Diary 夜猫日记</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} /> {/* ✅ Lab 3 Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
