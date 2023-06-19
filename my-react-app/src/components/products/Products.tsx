import { products } from '../../data/products';
import React, { Component } from 'react';
import { Product } from '../product/Product';
import './Products.css';

export class Products extends Component {
  render() {
    return (
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
