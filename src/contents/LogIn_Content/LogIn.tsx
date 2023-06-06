import { useEffect, useState } from 'react';
import { addDoc, collection,getDocs, query } from 'firebase/firestore';
import { auth, dbService, getData } from '../../Hook/Hook';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { BoldDiv, RecordContainer, RecordDiv, RecordGrid } from '../../component/styled_login';
import { LaxicalContainer } from '../../component/index-component/styled_index';
import RecordNav from '../Navbar/RecordNav';
import { KioskBorderDiv } from '../../component/kiosk-component/styled_hamburger';
import { PopcornImage, SelectedImage } from '../../component/main_components';
import Popcorn from '../../images/popcorn.png';
import Hamburger from '../../images/Hamburger.png';
import Americano from '../../images/Americano_choice.png';
import IceCream from '../../images/Icecream.png';

function LogIn() {
  const [userData, setUserData] = useState<any | null>(null);
  const [userObj, setUserObj] = useState<any | null>(null);
  const time = 1;

  const getData = async(user: any) => {
    const q = query(collection(dbService, "kiosk-record"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const dataSet = {
        ...doc.data(),
        id: doc.id,
        uid: user.uid
      }
        setUserData(dataSet);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          getData(user);
          setUserObj(user);
        }
      });
    };

    fetchData();
  }, []);
  
console.log(userData);

  return (
    <LaxicalContainer>
      <RecordNav />
      <RecordGrid>
        <RecordDiv>
          <BoldDiv>
          패스트푸드점
          </BoldDiv>
          <KioskBorderDiv>
            <SelectedImage image={Hamburger} />
          </KioskBorderDiv>
          <BoldDiv>
          {userData?.data.hamburger?.time?.sort((a: any,b: any) => a.time - b.time)?.slice(0,3)?.map((time:number, index: number) => (
              <div>{index + 1}번째: {time}초</div>
            ))}
          </BoldDiv>
        </RecordDiv>

        <RecordDiv>
          <BoldDiv>
          영화관
          </BoldDiv>
          <KioskBorderDiv>
            <PopcornImage image={Popcorn} />
          </KioskBorderDiv>
          <BoldDiv>
          {userData?.data.movie?.time?.sort((a: any,b: any) => a - b)?.slice(0,3).map((time:number, index: number) => (
              <div>{index + 1}번째: {time}초</div>
            ))}
          </BoldDiv>
        </RecordDiv>

        <RecordDiv>
          <BoldDiv>
          카 페
          </BoldDiv>
          <KioskBorderDiv>
            <PopcornImage image={Americano} />
          </KioskBorderDiv>
         <BoldDiv>
          {userData?.data.cafe?.time?.sort((a: any,b: any) => a - b)?.slice(0,3).map((time:number, index: number) => (
              <div>{index + 1}번째: {time}초</div>
            ))}
          </BoldDiv>
        </RecordDiv>

        <RecordDiv>
          <BoldDiv>
          아이스크림
          </BoldDiv>
          <KioskBorderDiv>
            <PopcornImage image={IceCream} />
          </KioskBorderDiv>
        </RecordDiv>
      </RecordGrid>
    </LaxicalContainer>
  );
}

export default LogIn;
