import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Routes, Route } from "react-router-dom";
import { Products } from './components/Products';
import { Product } from './components/Product';
import { Categories } from './components/Categories';
import { useProductQuery } from './services/productsApi';
import { ProductView } from './components/ProductView';
import { Search } from './components/Search';
import { Category } from './components/Category';
import { AddProduct } from './components/AddProduct';
import { Filters } from './components/Filters';
// import { useParams, useNavigate } from 'react-router-dom';

function App() {
  // const { name } = useParams();
  // const navigate = useNavigate();
  // console.log("name", name);

  // if (!name) {
  //   navigate("/products");
  // }
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <div className="filter">
        <Filters />
      </div>
      <section className='p_10'>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/product/:id' element={<ProductView />} />
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
