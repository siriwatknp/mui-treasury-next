import React from 'react';
import { render } from '@testing-library/react';
import { Text } from './typescript/Text';

describe('Component/Text', () => {
  it('renders without clash', () => {
    expect(() => render(<Text />)).not.toThrow()
  })
})