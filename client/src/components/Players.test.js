import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Players />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    render(<Players />);
  }); 