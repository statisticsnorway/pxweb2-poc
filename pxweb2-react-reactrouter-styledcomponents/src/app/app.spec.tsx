import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import routesConfig from '../routes';
import { i18nForTests, addI18nResourcesForTests } from '../i18nForTests';

import { getI18n } from 'react-i18next';

describe('App', () => {
  const INITIAL_TRANSLATIONS = {};
  const INITIAL_LNG_AND_NS = { language: 'en', ns: 'translationsNS' };

  // beforeEach(() => {
  //   i18nForTests(INITIAL_TRANSLATIONS);
  // });

  beforeAll(() => {
    i18nForTests(INITIAL_TRANSLATIONS);
  });

  afterEach(() => {
    //console.log(INITIAL_TRANSLATIONS);
    //getI18n().removeResourceBundle('en', 'translationsNS');
    addI18nResourcesForTests(INITIAL_TRANSLATIONS, INITIAL_LNG_AND_NS);
    //addI18nResourcesForTests(INITIAL_TRANSLATIONS);
  });

  it('should render successfully', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    });
    const { baseElement } = render(<RouterProvider router={router} />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title with translation', () => {
    addI18nResourcesForTests(
      {
        welcome: { apptitle: 'Welcome to PxWeb' },
      },
      { language: 'en', ns: 'translationsNS' }
    );

    // const currentI18nResources = getI18n().options.resources;
    // console.log('getI18n in with translation test');
    // console.log(currentI18nResources);

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    });
    const { getByText } = render(<RouterProvider router={router} />);

    expect(getByText(/Welcome to PxWeb/i)).toBeTruthy();
  });

  it('should have translation keys as the h1-site-title without translation', () => {
    // const currentI18nResources = getI18n().options.resources;
    // console.log('getI18n in without translation test');
    // console.log(currentI18nResources);

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    });
    const { getByText } = render(<RouterProvider router={router} />);

    // TODO: Find out why this test fails. The translation is shown instead of the translation keys.
    // The function to add resources for tests is not working as expected.
    // It does not overwrite the resources, unless that resource is specified. So adding 
    // an empty object does not remove the previous resources.

    expect(getByText(/welcome.apptitle/i)).toBeTruthy();
  });
});
