import { products } from '../../data/products';
import React from 'react';
import { Product } from '../product/Product';
import './Products.css';

export function Products() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
