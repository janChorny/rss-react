import './App.css';
import React from 'react';
import { Product } from './components/product';
import { products } from './data/products';

function App() {
  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
