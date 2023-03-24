import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { fn } from 'jest-mock';
import { FormsPage } from '../pages/forms/FormsPage';

describe('Forms page', () => {
  test('renders forms page', () => {
    const setTitle = fn();
    const title = render(<FormsPage setTitle={setTitle} />);
    expect(title).toBeTruthy();

    const h1 = title.container.querySelector('h1');
    expect(h1?.textContent).toMatch(/forms/i);
  });
});
