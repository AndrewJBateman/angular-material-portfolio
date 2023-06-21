import { firebase } from "./firebase.environment";

export const environment = {
  production: true,
  firebase: {
    firebase: '${process.env.FIREBASE_CONFIG}'
  },
  unsplash: {
    UNSPLASH_API_KEY: '${process.env.UNSPLASH_API_KEY}',
  },
};
