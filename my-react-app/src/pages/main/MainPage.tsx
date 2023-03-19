import { MyInput } from '../../components/input/MyInput';
import React, { Component } from 'react';
import { Products } from '../../components/products/Products';
import './MainPage.css';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Main page</h1>
        <MyInput />
        <Products />
      </div>
    );
  }
}
