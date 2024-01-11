import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import routesConfig from './routes';

describe('NotFoundPage', () => {
  it('should render successfully', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/does-not-exist'],
    });
    const { baseElement } = render(<RouterProvider router={router} />);

    expect(baseElement).toBeTruthy();
  });
  it('should show 404 message when page not found', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/does-not-exist'],
    });
    const { getByText } = render(<RouterProvider router={router} />);

    expect(getByText(/Oops! 404 - Page not found/i)).toBeTruthy();
  });
});
