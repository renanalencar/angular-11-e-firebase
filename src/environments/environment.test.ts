import { environmentConfig } from 'src/config/environment.config';

export const environment = {
  production: false,
  firebase: {
    apiKey: environmentConfig.firebase.apiKey,
    authDomain: environmentConfig.firebase.authDomain,
    projectId: environmentConfig.firebase.projectId,
    storageBucket: environmentConfig.firebase.storageBucket,
    messagingSenderId: environmentConfig.firebase.messagingSenderId,
    appId: environmentConfig.firebase.appId,
  }
};
