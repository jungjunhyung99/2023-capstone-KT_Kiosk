import { FlexBox, ImageBox, KTLogo, KioskContainer2, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, LogoTitle, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Hamburger from "../../images/Hamburger.png";
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IMode, hamburgerTime, practiceMode } from "../../Atom/atom";
import check from "../../images/check.svg";
import key from "../../images/key.svg";

function Hamburger_start() {
    const navigate = useNavigate();
    const setTime = useSetRecoilState(hamburgerTime);
    const setModeRecoil = useSetRecoilState(practiceMode);
    const startClick = (index: boolean) => {
        setTime(Date.now());
        setModeRecoil((prev: IMode) => ({...prev, hamburger:index}));
        navigate("/kiosk/hamburger/");
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
                    <LogoTitle>패스트푸드점</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <SelectedImage image={Hamburger}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                <StartButton onClick={() => startClick(true)}>
                    <ModeBox image={check}/>
                    핫초코 2개와 빅맥 단품 3개를 <br/>주문해주세요!
                </StartButton>
                <StartButton onClick={() => startClick(false)}>
                    <ModeBox image={key}/>
                    자율 연습 해보기
                </StartButton>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Hamburger_start;