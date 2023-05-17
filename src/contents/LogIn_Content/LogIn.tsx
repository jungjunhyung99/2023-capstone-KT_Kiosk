import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "../../Hook/Hook";
import { useState } from 'react';

function LogIn() {
  const [userData, setUserData] = useState<any | null>(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider) 
      .then((data: any) => {
        setUserData(data.user);
        console.log(data) 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      아직 미구현입니다.
    </div>
  );
}

export default LogIn;