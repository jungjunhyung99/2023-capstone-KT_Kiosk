import { FlexBox, ImageBox, KTLogo, KioskContainer2, KioskStartContainer, ModeBox } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentDescript, ContentTextBox, ContentTitle, LogoTitle, ModeClickBox, SelectedImage, WidthImageBox } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import Hamburger from "../../images/Hamburger.png";
import { DescribeDiv, KioskBorderDiv, StartButton } from "../../component/kiosk-component/styled_hamburger";
import { LaxicalContainer } from "../../component/index-component/styled_index";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IMode, fastAnswer, hamburgerTime, practiceMode } from "../../Atom/atom";
import check from "../../images/check.svg";
import key from "../../images/key.svg";
import { useEffect } from "react";

function Hamburger_start() {
    const navigate = useNavigate();
    const setTime = useSetRecoilState(hamburgerTime);
    const setModeRecoil = useSetRecoilState(practiceMode);
    const [answer,setAnswer] = useRecoilState(fastAnswer);

    const startClick = (index: boolean) => {
        setTime(Date.now());
        setModeRecoil((prev: IMode) => ({...prev, hamburger:index}));
        navigate("/kiosk/hamburger/");
    };


    useEffect(() => {
        setAnswer({
            takeout:"매장식사",
            beverage: "콜라",
            beverageCount: 2,
            food: "빅맥",
            foodCount: 3
        })
    },[]);

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
                <ModeClickBox onClick={() => startClick(true)}>
                        <ModeBox image={check}/>
                        <ContentTextBox>
                            <ContentTitle style={{fontSize:"3rem"}}>지도모드</ContentTitle>
                            <ContentDescript>
                            {answer.food} {answer.foodCount}개, {answer.beverage} {answer.beverageCount}개<br/> {answer.takeout} 주문 해주세요!
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

export default Hamburger_start;