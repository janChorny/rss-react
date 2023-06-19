import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AboutPage } from '../pages/about/AboutPage';
import { fn } from 'jest-mock';

describe('About page', () => {
  test('renders about page', () => {
    const setTitle = fn();
    const title = render(<AboutPage setTitle={setTitle} />);
    expect(title).toBeTruthy();

    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch(/about/i);
  });
});
