import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARL0m4BhgO61R_pEbiIeMDT1QwOj0eHIk",
  authDomain: "e-mania.firebaseapp.com",
  projectId: "e-mania",
  storageBucket: "e-mania.appspot.com",
  messagingSenderId: "449333544267",
  appId: "1:449333544267:web:45728f5bd13b4b942f14ce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
