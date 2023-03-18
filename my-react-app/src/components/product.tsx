import './product.css';
import { ProductModel } from 'models/models';
import React from 'react';

interface ProductProps {
  product: ProductModel;
}

export function Product(props: ProductProps) {
  const [details, setDetails] = React.useState(false);
  const btnBgClassName = details ? 'product-button-blue' : 'product-button-yellow';
  const btnClasses = ['product-button', btnBgClassName];

  return (
    <div className="product-container">
      <img src={props.product.image} alt={props.product.title} className="product-image" />
      <p>{props.product.title}</p>
      <span className="product-price">{props.product.price}</span>
      <button className={btnClasses.join(' ')} onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide details' : 'Show details'}
      </button>
      {details && (
        <div>
          <p>{props.product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              {props.product.rating.rate}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
