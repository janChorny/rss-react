import { SearchInput } from '../../components/inputComponents/searchInput/SearchInput';
import React, { Component } from 'react';
import { Products } from '../../components/products/Products';
import './MainPage.css';
import { PageTitleProps } from 'models/models';

export class MainPage extends Component<PageTitleProps> {
  componentDidMount() {
    this.props.setTitle('About page');
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Main page</h1>
        <SearchInput />
        <Products />
      </div>
    );
  }
}
