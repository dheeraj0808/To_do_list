import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Counter from './component/Counter.jsx'
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
