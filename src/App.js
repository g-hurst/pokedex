import React from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SingleCard from './pages/SingleCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home className='cardsBox' />} />
          <Route exact path="/:id" element={<SingleCard />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
