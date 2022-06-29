/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '@/pages/index';

describe('Rendering', () => {
  it('hello というテキストが表示されている', () => {
    render(<Home />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
