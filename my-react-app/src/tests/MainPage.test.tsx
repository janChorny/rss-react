import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { MainPage } from '../pages/main/MainPage';
import { fn } from 'jest-mock';

describe('Main page', () => {
  test('renders main page', () => {
    const setTitle = fn();
    const title = render(<MainPage setTitle={setTitle} />);
    expect(title).toBeTruthy();

    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch('Main page');
  });
});
