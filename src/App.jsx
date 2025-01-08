import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
