import { BackCircle, BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, DocImage, GameImage, KTImage, KioskImage, LogInImage, LogoTitle, MapImage } from "../../component/main_components";
import { StyledLink } from "../../component/index-component/styled_index";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "../../Hook/Hook";
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { LogInState } from "../../Atom/atom";


function Main () {
  const [userData, setUserData] = useState<any | null>(null);
  const [login, setLogin] = useRecoilState(LogInState);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data: any) => {
        setUserData(data.user); // user data 설정
        setLogin(true);
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return(
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <BackCircle>
                    <KTImage/>
                    <LogoTitle>교육용 웹 키오스크 </LogoTitle> 
                </BackCircle>
            </CircleConatiner>
            <ContentContainer>
   
            {!login ? 
                <ContentClickBox onClick={handleGoogleLogin}>
                    <LogInImage/>
                    <ContentTextBox>
                        <ContentTitle>로그인 하기</ContentTitle>
                        <ContentDescript>
                            로그인을 통해 나의 데이터를 비교해보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
                : 
                <ContentClickBox>
                    <DocImage/>
                    <ContentTextBox>
                        <ContentTitle>나의 기록 확인하기</ContentTitle>
                        <ContentDescript>
                            나의 지난 기록들을 통해 성장한 나를 확인해보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
                }
                
            <StyledLink to="/kiosk">    
                <ContentClickBox>
                    <KioskImage/>
                    <ContentTextBox>
                        <ContentTitle>키오스크 연습하기</ContentTitle>
                        <ContentDescript>
                            카페, 패스트푸드, 영화관 등의 키오스크를 연습해보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
            </StyledLink>

            <StyledLink to="/game">
                <ContentClickBox>
                    <GameImage/>
                    <ContentTextBox>
                        <ContentTitle>뇌활력 게임하기</ContentTitle>
                        <ContentDescript>
                            숫자게임, 글자게임 등의 뇌할력 게임을 즐겨보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>

            </StyledLink>
                <ContentClickBox>
                    <MapImage/>
                    <ContentTextBox>
                        <ContentTitle>키오스크 설명서 </ContentTitle>
                        <ContentDescript>
                            간단한 키오스크 설명을 읽어주세요!    
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
            
            </ContentContainer>
        </div>
    );
}

export default Main;