import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "../../Hook/Hook";
import { useState } from 'react';

function LogIn() {
  const [userData, setUserData] = useState<any | null>(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data: any) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{height:"100vh", backgroundColor:"white"}}>
      <h1>로그인 누르셈</h1>
      <button onClick={handleGoogleLogin}>Login</button>
      <div>
        {userData
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </div>
  );
}

export default LogIn;