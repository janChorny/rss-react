import { SearchInput } from '../../components/inputComponents/searchInput/SearchInput';
import React, { useEffect } from 'react';
import { Products } from '../../components/products/Products';
import './MainPage.css';
import { PageTitleProps } from 'models/models';

export function MainPage(props: PageTitleProps) {
  useEffect(() => {
    props.setTitle('Main page');
  });

  return (
    <div>
      <h1 className="page-header">Main page</h1>
      <SearchInput />
      <Products />
    </div>
  );
}
