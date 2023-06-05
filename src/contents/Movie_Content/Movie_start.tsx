import { FlexBox, KTLogo, KioskContainer2, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentDescript, ContentTextBox, ContentTitle, KioskClickBox, LogoTitle, ModeClickBox, PopcornImage, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Popcorn from "../../images/popcorn.png"
import { DescribeDiv, KioskBorderDiv, ModeButtonDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IMode, movieAnswer, movieTime, practiceMode } from "../../Atom/atom";
import check from "../../images/check.svg";
import key from "../../images/key.svg";
import { useEffect } from "react";


function Movie_start() {
    const navigate = useNavigate();
    const setMovieTime = useSetRecoilState(movieTime);
    const setModeRecoil = useSetRecoilState(practiceMode);
    const [answerRecoil, setAnswerRecoil] = useRecoilState(movieAnswer);
    
    const times = ["11:40", "14:05", "16:35"];

    const startClick = (index: boolean) => {
        setMovieTime(Date.now());
        setModeRecoil((prev: IMode) => ({...prev, movie: index}));
        navigate("/kiosk/movie");
    };

    const getMovies = async () => {
        const json = await (
          await fetch(
              `https://api.themoviedb.org/3/movie/now_playing?api_key=1e1dd98e7bbdb858a49359dbec86444f`
          )
        ).json();

        console.log(json);

        const number :number = Math.floor(Math.random()*3);        
        setAnswerRecoil(
            {
                title: json?.results[1].title,
                time: times[number],
                seat: 3,
                num: number,
            }
        );
      };
    const setAnswer = () => {
        const number = Math.floor(Math.random()*3);
    };

      useEffect(() => {
        getMovies();
      }, []);

      console.log(answerRecoil);
    return (
        <LaxicalContainer>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <KioskStartContainer> 
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>씨네마</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <PopcornImage image={Popcorn}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                    <ModeClickBox onClick={() => startClick(true)}>
                        <ModeBox image={check}/>
                        <ContentTextBox>
                            <ContentTitle style={{fontSize:"3rem"}}>지도모드</ContentTitle>
                            <ContentDescript>
                            {answerRecoil.title} {answerRecoil.time}분 <br/>영화를 3자리 예매해주세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ModeClickBox>
                    <ModeClickBox onClick={() => startClick(false)}>
                        <ModeBox image={key}/>
                        <ContentTextBox>
                            <ContentTitle style={{fontSize:"3rem"}}>
                            자율 연습 하기
                            </ContentTitle>
                            <ContentDescript>
                            미션이 주어지지 않고, 자유롭게 연습할 수 있는 모드입니다.</ContentDescript>
                        </ContentTextBox>
                    </ModeClickBox>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Movie_start;