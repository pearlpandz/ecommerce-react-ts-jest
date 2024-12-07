import { render } from '@testing-library/react';
import SplashScreen from './SplashScreen';

describe('SplashScreen', () => {
  it('renders correctly', () => {
    const { container } = render(<SplashScreen />);
    expect(container).toMatchSnapshot();
  });
});
