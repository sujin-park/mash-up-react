import { render } from "@testing-library/react";
import App from './App';
import React from 'react';

describe('<App />', () => {
  it('render App component', () => {
    const { getByText } = render(<App />);
  
    const text = getByText('Hello, React!');
    expect(text).toBeInTheDocument();
  })
})

