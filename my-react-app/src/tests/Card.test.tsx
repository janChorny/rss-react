import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Result } from 'models/models';
import { Card } from '../components/card/Card';

describe('Testing <Card /> component', () => {
  test('should show Card component', () => {
    const fakeCard: Result = {
      id: Date.now(),
      name: 'name',
      status: 'status',
      species: 'spices',
      type: 'type',
      gender: 'gender',
      origin: { name: 'name', url: 'url' },
      location: { name: 'name', url: 'url' },
      image: 'image',
      episode: ['first', 'second'],
      url: 'url',
      created: 'created',
    };
    const component = render(<Card card={fakeCard} />);
    expect(component).toBeTruthy();
  });
});
