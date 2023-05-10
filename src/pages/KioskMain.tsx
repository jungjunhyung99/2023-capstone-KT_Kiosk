import { StyledLink } from "../component/index-component/styled_index";
import { FlexBox, ImageBox, ImageBox1, KTLogo, KioskContainer, NavBar, NextButton, PrevButton } from "../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, GameImage, KTImage, KioskImage, LogoTitle, MapImage } from "../component/main_components";
import Hamburger from "../images/Hamburger.png";
import Americano from "../images/Americano_choice.png";
import Popcorn from "../images/popcorn.png";
import Icecream from "../images/Icecream.png"; 
import { useNavigate } from "react-router-dom";

function KioskMain() {
    const navigate = useNavigate();

    return (        
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <NavBar> 
                    <PrevButton onClick={() => navigate(-1)}>이전 화면으로</PrevButton>
                    <NextButton onClick={() => navigate(-1)}>처음 화면으로</NextButton>
                </NavBar>
            </CircleConatiner>
            <KioskContainer>
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>키오스크 체험하기</LogoTitle>
                </FlexBox>    
                <StyledLink to="/kiosk">    
                    <ContentClickBox>
                        <ImageBox image={Hamburger}/>
                        <ContentTextBox>
                            <ContentTitle>패스트푸드 키오스크</ContentTitle>
                            <ContentDescript>
                                햄버거, 너겟, 파이 등의 메뉴를 주문해보세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
                </StyledLink>

                    <ContentClickBox>
                        <ImageBox image={Americano}/>
                        <ContentTextBox>
                            <ContentTitle>카페 키오스크</ContentTitle>
                            <ContentDescript>
                                커피, 에이드, 케이크 등의 메뉴를 주문해보세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>

                    <ContentClickBox>
                        <ImageBox image={Popcorn}/>
                        <ContentTextBox>
                            <ContentTitle>영화관 키오스크</ContentTitle>
                            <ContentDescript>
                                원하는 영화를 예매해보세요!    
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>

                <StyledLink to="/kiosk/Icecream">    
                    <ContentClickBox>
                        <ImageBox1 image={Icecream}/>
                        <ContentTextBox>
                            <ContentTitle>아이스크림 키오스크</ContentTitle>
                                <ContentDescript>
                                    여러 종류의 아이스크림을 주문해보세요!  
                                </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
                </StyledLink>

            </KioskContainer>
        </div>
    );
}

export default KioskMain;