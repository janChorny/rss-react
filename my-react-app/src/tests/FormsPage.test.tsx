import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { fn } from 'jest-mock';
import { FormsPage } from '../pages/forms/FormsPage';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Forms page', () => {
  test('renders forms page', () => {
    const setTitle = fn();
    const title = render(
      <Provider store={store}>
        <FormsPage setTitle={setTitle} />
      </Provider>
    );
    expect(title).toBeTruthy();
    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch(/forms/i);
  });
});
