import Americano from "../../images/Americano_choice.png";
import Popcorn from "../../images/popcorn.png";
import { useNavigate } from "react-router-dom";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentDescript, ContentTextBox, ContentTitle, LogoTitle } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import { FlexBox, ImageBox, ImageLongBox, KTLogo, KioskContainer } from "../../component/kiosk-component/styled_kiosk";
import { StyledLink } from "../../component/index-component/styled_index";
import BasicBalloon from "../../images/basic_balloon.svg";

function GameMain() {
    const navigate = useNavigate();
    return (        
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <KioskContainer>
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>뇌활력 게임 체험하기</LogoTitle>
                </FlexBox>    
                <StyledLink to="/game/balloon">    
                    <ContentClickBox>
                        <ImageLongBox image={BasicBalloon}/>
                        <ContentTextBox>
                            <ContentTitle>글자게임 하기</ContentTitle>
                            <ContentDescript>
                                글자색을 혼동하지말고 풍선을 팡팡 터뜨려주세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
                </StyledLink>
                
                <StyledLink to="/kiosk/cafe">
                    <ContentClickBox>
                        <ImageLongBox image={Americano}/>
                        <ContentTextBox>
                            <ContentTitle>카페 키오스크</ContentTitle>
                            <ContentDescript>
                                커피, 에이드, 케이크 등의 메뉴를 주문해보세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
                </StyledLink>
                    
                    <ContentClickBox>
                        <ImageLongBox image={Popcorn}/>
                        <ContentTextBox>
                            <ContentTitle>영화관 키오스크</ContentTitle>
                            <ContentDescript>
                                원하는 영화를 예매해보세요!    
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
            
            </KioskContainer>
        </div>
    );
}

export default GameMain;