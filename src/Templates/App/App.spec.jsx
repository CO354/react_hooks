import { render, screen } from '@testing-library/react';
import App from '.';
describe('App Test', () => {
  it('should have div element in the document', () => {
    const { debug } = render(<App />);
    expect(screen.getByRole('div', { name: /text/i }));

    debug();
  });
});
