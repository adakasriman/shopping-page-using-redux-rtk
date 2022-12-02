import React from 'react';
import './App.css';
import './components/components-styles/style.css'
import { Header } from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import { Products } from './components/products/ProductsContainer';
import { ProductViewContainer } from './components/product-view/ProductViewContainer';
import { CategoriesContainer } from './components/categories/categories/CategoriesContainer';
import { SearchContainer } from './components/search/SearchContainer';
import { AddProductContainer } from './components/add-product/AddProductContainer';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <Header/>
      </header>
      <section className='p_10'>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/product/:id' element={<ProductViewContainer />} />
          <Route path='/products/search' element={<SearchContainer />} />
          <Route path="/products/categories" element={<CategoriesContainer />} />
          <Route path="/products/category/:category" element={<CategoriesContainer />} />
          <Route path="/products/add" element={<AddProductContainer />} />
        </Routes>
      </section>
      {/* <Categories /> */}
    </div>
  );
}

export default App;
