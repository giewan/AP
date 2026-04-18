// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders API3Airnode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/API3Airnode/i);
    expect(titleElement).toBeInTheDocument();
});
