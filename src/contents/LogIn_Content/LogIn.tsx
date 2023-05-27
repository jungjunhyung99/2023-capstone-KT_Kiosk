import { db } from "../../Hook/Hook";
import {collection, getDocs} from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "../../Hook/Hook";
import { useEffect, useState } from 'react';
import { RecordContainer, RecordDiv, RecordGrid } from '../../component/styled_login';
import { LaxicalContainer } from '../../component/index-component/styled_index';
import RecordNav from '../Navbar/RecordNav';
import { KioskBorderDiv } from '../../component/kiosk-component/styled_hamburger';
import { PopcornImage, SelectedImage } from '../../component/main_components';
import Popcorn from "../../images/popcorn.png";
import Hamburger from "../../images/Hamburger.png";
import Americano from "../../images/Americano_choice.png";
import IceCream from "../../images/Icecream.png";

function LogIn() {
  const [userData, setUserData] = useState<any | null>(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider) 
      .then((data: any) => {
        setUserData(data.user);
        console.log(data);
        localStorage.setItem('token', data._tokenResponse.idToken) ;
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <LaxicalContainer>
      <RecordNav/>
      <RecordGrid>
        <RecordDiv>
          패스트푸드점
          <KioskBorderDiv>
            <SelectedImage image={Hamburger}/>
          </KioskBorderDiv>
        </RecordDiv>

        <RecordDiv>
          영화관
          <KioskBorderDiv>
            <PopcornImage image={Popcorn}/>
          </KioskBorderDiv>
        </RecordDiv>
        
        <RecordDiv>
          카 페
          <KioskBorderDiv>
            <PopcornImage image={Americano}/>
          </KioskBorderDiv>
        </RecordDiv>
        
        <RecordDiv>
          아이스크림
          <KioskBorderDiv>
            <PopcornImage image={IceCream}/>
          </KioskBorderDiv>
        </RecordDiv>
      </RecordGrid>
    </LaxicalContainer>
  );
}

export default LogIn;