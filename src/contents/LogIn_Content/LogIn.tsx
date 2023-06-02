import { useEffect, useState } from 'react';
import { addDoc, collection,getDocs, query } from 'firebase/firestore';
import { auth, dbService, getData } from '../../Hook/Hook';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { RecordContainer, RecordDiv, RecordGrid } from '../../component/styled_login';
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
          패스트푸드점
          <KioskBorderDiv>
            <SelectedImage image={Hamburger} />
    
          </KioskBorderDiv>
        </RecordDiv>

        <RecordDiv>
          영화관
          <KioskBorderDiv>
            <PopcornImage image={Popcorn} />
          </KioskBorderDiv>
          {userData?.data.movie?.time?.map((time:number, index: number) => (
              <div>{index + 1}번째: {time}초</div>
            ))}
        </RecordDiv>

        <RecordDiv>
          카 페
          <KioskBorderDiv>
            <PopcornImage image={Americano} />
          </KioskBorderDiv>
        </RecordDiv>

        <RecordDiv>
          아이스크림
          <KioskBorderDiv>
            <PopcornImage image={IceCream} />
          </KioskBorderDiv>
        </RecordDiv>
      </RecordGrid>
    </LaxicalContainer>
  );
}

export default LogIn;
