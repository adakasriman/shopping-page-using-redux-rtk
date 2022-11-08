import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Routes, Route } from "react-router-dom";
import { Products } from './components/Products';
import { Product } from './components/Product';
import { Categories } from './components/Categories';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productview/:id" element={<Product />} />
          <Route path="/newproduct" element={<Categories />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
