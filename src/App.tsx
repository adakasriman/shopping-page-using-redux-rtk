import React from 'react';
import './App.css';
import './components/components-styles/style.css'
import { Header } from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import { Products } from './components/products/ProductsContainer';
import { Categories } from './components/categories/categories/Categories';
import { Search } from './components/search/Search';
import { Category } from './components/categories/categories-products/Category';
import { AddProduct } from './components/add-product/AddProduct';
import { ProductViewContainer } from './components/product-view/ProductViewContainer';

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
          <Route path='/products/search' element={<Search />} />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/products/category/:category" element={<Category />} />
          <Route path="/products/add" element={<AddProduct />} />
        </Routes>
      </section>
      {/* <Categories /> */}
    </div>
  );
}

export default App;
