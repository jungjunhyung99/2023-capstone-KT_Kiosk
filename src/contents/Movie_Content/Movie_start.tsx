import { FlexBox, KTLogo, KioskContainer2, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, LogoTitle, PopcornImage, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Popcorn from "../../images/popcorn.png"
import { DescribeDiv, KioskBorderDiv, ModeButtonDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IMode, movieTime, practiceMode } from "../../Atom/atom";
import check from "../../images/check.svg";
import key from "../../images/key.svg";


function Movie_start() {
    const navigate = useNavigate();
    const setMovieTime = useSetRecoilState(movieTime);
    const setModeRecoil = useSetRecoilState(practiceMode);
    const startClick = (index: boolean) => {
        setMovieTime(Date.now());
        setModeRecoil((prev: IMode) => ({...prev, movie: index}));
        navigate("/kiosk/movie");
    };

    return (
        <div>
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
                
                    <StartButton onClick={() => startClick(true)}>
                        <ModeBox image={check}/>
                        'The Super Mario Bros. Movie' <br/>영화를 3자리 예매해주세요!
                    </StartButton>
                    <StartButton onClick={() => startClick(false)}>
                        <ModeBox image={key}/>
                        자율 연습 하기
                    </StartButton>
            </KioskStartContainer>
        </div>
    );
}

export default Movie_start;