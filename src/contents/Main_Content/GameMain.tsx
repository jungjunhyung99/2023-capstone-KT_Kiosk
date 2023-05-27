import Americano from "../../images/Americano_choice.png";
import { useNavigate } from "react-router-dom";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentDescript, ContentTextBox, ContentTitle, LogoTitle } from "../../component/main_components";
import Kiosk_Nav from "../Navbar/KioskNav";
import { FlexBox, ImageBox, ImageLongBox, KTLogo, KioskContainer } from "../../component/kiosk-component/styled_kiosk";
import { GameDiv, StyledLink } from "../../component/index-component/styled_index";
import BasicBalloon from "../../images/basic_balloon.svg";
import number from "../../images/number.png";

function GameMain() {
    const navigate = useNavigate();
    return (        
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <GameDiv>
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
                
                <StyledLink to="/game/number">
                    <ContentClickBox>
                        <ImageLongBox image={number}/>
                        <ContentTextBox>
                            <ContentTitle>숫자게임 하기</ContentTitle>
                            <ContentDescript>
                                1부터 순서대로 숫자를 눌러주세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
                </StyledLink>
                    
            </GameDiv>
        </div>
    );
}

export default GameMain;