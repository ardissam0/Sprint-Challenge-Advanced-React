import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import { render, fireEvent } from '@testing-library/react';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    render(<Navigation />);
  });

  test('displays navTest', () => {
      const { getByTestId } = render(<Navigation />);
      getByTestId(/navTest/i);
  });

  test('displays toggleTest', () => {
    const { getByTestId } = render(<Navigation />);
    getByTestId(/toggleTest/i);
  });

  test('displays toggleTest click', () => {
    const { getByTestId } = render(<Navigation />);
    const toggle = getByTestId(/toggleTest/i);

    fireEvent.click(toggle);
  });
