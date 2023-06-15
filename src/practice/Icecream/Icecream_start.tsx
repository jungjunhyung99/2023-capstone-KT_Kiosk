import { FlexBox, KTLogo, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentDescript, ContentTextBox, ContentTitle, LogoTitle, ModeClickBox, IcecreamImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../../contents/Navbar/KioskNav";
import Icecream from "../../images/Icecream.png";
import { DescribeDiv, KioskBorderDiv } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IMode, icecreamTime, practiceMode2 } from "../../Atom/store";
import check from "../../images/check.svg";
import key from "../../images/key.svg";

function Icecream_start() {
    const navigate = useNavigate();
    const setTime = useSetRecoilState(icecreamTime);
    const setModeRecoil = useSetRecoilState(practiceMode2);

    const startClick = (index: boolean) => {
        setTime(Date.now());
        setModeRecoil((prev: IMode) => ({...prev, icecream:index}));
        navigate("/kiosk/Icecream");
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
                    <LogoTitle>아이스크림 판매점</LogoTitle>
                </FlexBox>
                <KioskBorderDiv>
                    <IcecreamImage image={Icecream}/>
                </KioskBorderDiv>
                <DescribeDiv>준비가 되셨다면 하단의 버튼을 눌러주세요!</DescribeDiv>
                <ModeClickBox onClick={() => startClick(true)}>
                        <ModeBox image={check}/>
                        <ContentTextBox>
                            <ContentTitle style={{fontSize:"3rem"}}>지도모드</ContentTitle>
                            <ContentDescript>
                            빠삐코 아이스크림을 3개 주문 해주세요!
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
                            미션이 주어지지 않고, 자유롭게 연습할 수 있는 모드입니다.
                            </ContentDescript>
                        </ContentTextBox>
                    </ModeClickBox>
            </KioskStartContainer>
        </LaxicalContainer>
    );
}

export default Icecream_start;