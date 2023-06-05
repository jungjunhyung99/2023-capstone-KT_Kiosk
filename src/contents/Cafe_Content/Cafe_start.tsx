import { FlexBox, KTLogo, KioskContainer2, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentDescript, ContentTextBox, ContentTitle, LogoTitle, ModeClickBox, PopcornImage, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Americano from "../../images/Americano_choice.png";
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { cafeTime } from "../../Atom/atom";
import check from "../../images/check.svg";
import key from "../../images/key.svg";


function Cafe_start() {
    const navigate = useNavigate();
    const setCafeTimer = useSetRecoilState(cafeTime);

    const startClick = (index: boolean) => {
        navigate("/kiosk/cafe/main");
        setCafeTimer(Date.now());
    }

    return (
        <LaxicalContainer>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <KioskStartContainer> 
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>카 페</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <PopcornImage image={Americano}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                
                <ModeClickBox onClick={() => startClick(true)}>
                        <ModeBox image={check}/>
                        <ContentTextBox>
                            <ContentTitle style={{fontSize:"3rem"}}>지도모드</ContentTitle>
                            <ContentDescript>
                            고구마 라떼 2개, 초코케이크 2개,<br/> 청포도에이드 3개를 구매해주세요!
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
                            고구마 라떼 2개, 초코케이크 2개,<br/> 청포도에이드 3개를 구매해주세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ModeClickBox>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Cafe_start;