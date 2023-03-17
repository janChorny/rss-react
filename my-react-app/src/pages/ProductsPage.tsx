import { MyInput } from '../components/input/MyInput';
import { Product } from '../components/product';
import { products } from '../data/products';

import React from 'react';

export function ProductsPage() {
  const [value, setValue] = React.useState('Type text here');

  return (
    <div>
      <MyInput type="text" placeholder="Custom input" />
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)}></input>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}
