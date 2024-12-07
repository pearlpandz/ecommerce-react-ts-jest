import { act } from 'react-dom/test-utils';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render corrently', async () => {
    render(<App />)
    const title = screen.queryByText('Ecommerce Application');
    expect(title).not.toBeNull()

    jest.advanceTimersByTime(1000);
    await screen.findByText('Product Title');
  });
});
