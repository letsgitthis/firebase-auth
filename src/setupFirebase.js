import * as firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrIG73G5Kjhx2njmTCC5baoYSav8IBal8",
  authDomain: "fir-auth-af135.firebaseapp.com",
  databaseURL: "https://fir-auth-af135.firebaseio.com",
  projectId: "fir-auth-af135",
  storageBucket: "fir-auth-af135.appspot.com",
  messagingSenderId: "1072541078586",
  appId: "1:1072541078586:web:1898a1405ff1fff0495103",
  measurementId: "G-YSC6RPVCMT",
};

firebase.initializeApp(firebaseConfig);