  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import 'firebase/auth';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  

export function makeImagePath(id: string, format?: string){
    return  `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
  }

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "web-kiosk-35825.firebaseapp.com",
  projectId: "web-kiosk-35825",
  storageBucket: "web-kiosk-35825.appspot.com",
  messagingSenderId: "424100821558",
  appId: "1:424100821558:web:87589c33dad044de7ef697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};