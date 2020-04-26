import { AsyncStorage } from "react-native";

let USER_KEY = "";

export const onSignOut = (USER_KEY) => AsyncStorage.removeItem(USER_KEY);

export const onSignIn = (USER_KEY) => AsyncStorage.setItem(USER_KEY, "true");

export const onSignUp = (USER_KEY) => {
  console.log("Signing up User");
  return AsyncStorage.setItem(USER_KEY, "true");
}

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};