import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import routesConfig from './routes';

describe('ErrorPage', () => {

    // TODO: Add test for ErrorPage
  it('should render successfully', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/does/not/exist'],
    });
    const { baseElement } = render(<RouterProvider router={router} />);

    expect(baseElement).toBeTruthy();
  });
});
