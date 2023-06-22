import { firebase } from "./firebase.environment";

export const environment = {
  production: false,
  ...firebase,
  unsplash: {
    UNSPLASH_API_KEY: "YOUR API KEY HERE"
  }
};
