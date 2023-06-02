  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import 'firebase/auth';
  import "firebase/firestore";

export function makeImagePath(id: string, format?: string | null){
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
export const dbService = getFirestore();
export {app,auth};

export async function getData(user: any) {
  try {
    const q = query(collection(dbService, 'kiosk-record'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(querySnapshot);
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    return null;
  }
};



