// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'https://192.168.1.6:9112',
  //API_URL: 'https://localhost:9112',
  AUTH_URL: {
    login: '/api/v1/rest/auth',
    register: '/api/v1/rest/auth/register',
    accountActivation: '/api/v1/rest/auth/confirmRegistration'
  },
  EBAY_URL: {
    authAccepted: '/secured/api/v1/rest/ebay/auth/accepted',
    authRedirect: '/secured/api/v1/rest/ebay/auth/',
    getTokenExpirationDate: '/secured/api/v1/rest/ebay/auth/token/'
  },
  ALLEGRO_URL: {
    authAccepted: '/secured/api/v1/allegro/auth',
    authRedirect: '/secured/api/v1/allegro/auth',
    getTokenExpirationDate: '/secured/api/v1/allegro/auth/status',
    getCategoryList: '/secured/api/v1/allegro/category'
  }
};
