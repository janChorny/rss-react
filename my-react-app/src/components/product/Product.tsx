import React, { Component } from 'react';
import './Product.css';
import { ProductProps } from 'models/models';

export class Product extends Component<ProductProps> {
  constructor(props: ProductProps) {
    super(props);
  }

  render() {
    return (
      <div className="product-container">
        <div className="product-wrapper">
          <img
            src={this.props.product.image}
            alt={this.props.product.title}
            className="product-image"
          />
        </div>
        <p className="product-text">{this.props.product.title}</p>
        <span className="product-price">{this.props.product.price}$</span>
      </div>
    );
  }
}
