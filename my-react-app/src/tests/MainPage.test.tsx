import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { MainPage } from '../pages/main/MainPage';
import { fn } from 'jest-mock';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Main page', () => {
  test('renders main page', () => {
    const setTitle = fn();
    const title = render(
      <Provider store={store}>
        <MainPage setTitle={setTitle} />
      </Provider>
    );
    expect(title).toBeTruthy();

    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch('Main page');
  });
});
