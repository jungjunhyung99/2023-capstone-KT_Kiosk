import { FlexBox, KTLogo, KioskContainer2, KioskStartContainer } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, LogoTitle, PopcornImage, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Americano from "../../images/Americano_choice.png";
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";

function Cafe_start() {
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
                    <LogoTitle>패스트푸드점</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <PopcornImage image={Americano}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                <StartButton onClick={() => navigate("/kiosk/cafe/main")}>고구마 라떼 2개, 초코케이크 2개, 청포도에이드 3개를 구매해주세요!</StartButton>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Cafe_start;