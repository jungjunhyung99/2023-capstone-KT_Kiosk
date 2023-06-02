import { FlexBox, KTLogo, KioskContainer2, KioskStartContainer } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, LogoTitle, PopcornImage, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Popcorn from "../../images/popcorn.png"
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { movieTime, practiceMode } from "../../Atom/atom";

function Movie_start() {
    const navigate = useNavigate();
    const setMovieTime = useSetRecoilState(movieTime);
    const setModeRecoil = useSetRecoilState(practiceMode);
    const startClick = () => {
        setMovieTime(Date.now());
        navigate("/kiosk/movie");
    };

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
                <StartButton onClick={startClick}>'The Super Mario Bros. Movie' 영화를 3자리 예매해주세요!</StartButton>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Movie_start;