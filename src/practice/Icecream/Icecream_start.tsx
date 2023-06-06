import { useNavigate } from "react-router-dom";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { BackCircle2, CircleConatiner, LogoTitle, PopcornImage, SelectedImage } from "../../component/main_components";
import Kiosk_Nav from "../../contents/Navbar/KioskNav";
import { FlexBox, KTLogo, KioskStartContainer } from "../../component/kiosk-component/styled_kiosk";
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import IceCream from "../../images/Icecream.png";

function Icecream_start() {
    const navigate = useNavigate();
    return (
        <LaxicalContainer>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <KioskStartContainer> 
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>무인 아이스크림 가게</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <PopcornImage image={IceCream}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                <StartButton onClick={() => navigate("/kiosk/icecream")}>탱크보이 2개와 구구콘 1개를 골라주세요!</StartButton>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Icecream_start;