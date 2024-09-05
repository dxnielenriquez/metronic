// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  api :  {
    baseUrl : 'http://10.112.32.170:8002/api/web',
    authTokenName: '__gastigantotoken__',
    storageUrl : 'http://10.112.32.170:8002/storage',
  },

  appVersion: 'v8.2.4',
  isMockEnabled: true,
  appDemos: {
    demo1: {
      title: 'Demo 1',
      description: 'Default Dashboard',
      published: true,
      thumbnail: './assets/media/demos/demo1.png',
    },
  },
};

