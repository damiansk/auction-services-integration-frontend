// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'https://localhost:9112',
  AUTH_URL: {
    login: '/api/v1/rest/auth',
    register: '/api/v1/rest/auth/register',
    accountActivation: '/api/v1/rest/auth/confirmRegistration'
  },
  EBAY_URL: {
    authAccepted: '',
    authDeclined: '',
    authPolicy: '',
    authRedirect: '/secured/api/v1/rest/ebay/auth/',
    getTokenExpirationDate: '/secured/api/v1/rest/ebay/auth/token/'
  }
};
