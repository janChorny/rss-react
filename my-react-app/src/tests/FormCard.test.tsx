import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FormCard } from '../components/formCard/FormCard';
import { FormInput } from 'models/models';

describe('Testing <FormCard /> component', () => {
  test('should show FormCard component', () => {
    const fakeCard: FormInput = {
      id: Date.now(),
      title: 'string',
      date: '07-07-2007',
      country: 'USA',
      additional: true,
      pay: 'card',
      profilePicture: 'www.google.com',
    };
    const component = render(<FormCard card={fakeCard} />);
    expect(component).toBeTruthy();
  });
});
