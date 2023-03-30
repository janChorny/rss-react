import React from 'react';
import './Product.css';
import { ProductProps } from 'models/models';

export function Product(props: ProductProps) {
  return (
    <div className="product-container">
      <div className="product-wrapper">
        <img src={props.product.image} alt={props.product.title} className="product-image" />
      </div>
      <p className="product-text">{props.product.title}</p>
      <span className="product-price">{props.product.price}$</span>
    </div>
  );
}
