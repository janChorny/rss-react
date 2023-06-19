import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { NotFoundPage } from '../pages/notfound/NotFoundPage';
import { fn } from 'jest-mock';

describe('Not found page', () => {
  test('renders not found page', () => {
    const setTitle = fn();
    const title = render(<NotFoundPage setTitle={setTitle} />);
    expect(title).toBeTruthy();

    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch('Not found page');
  });
});
