import { StyledLink } from "../../component/index-component/styled_index";
import { FlexBox, ImageBox, ImageLongBox, KTLogo, KioskContainer, KioskContainer2, NavBar, NextButton, PrevButton } from "../../component/kiosk-component/styled_kiosk";
import { ImageBox1 } from "../../component/kiosk-component/styled_icecream";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, GameImage, HeightImageBox, KTImage, KioskChoiceContainer, KioskClickBox, KioskImage, KioskImageBox, LogoTitle, MapImage, WidthImageBox } from "../../component/main_components";
import Hamburger from "../../images/Hamburger.png";
import Americano from "../../images/Americano_choice.png";
import Popcorn from "../../images/popcorn.png";
import Icecream from "../../images/Icecream.png"; 
import { useNavigate } from "react-router-dom";
import Kiosk_Nav from "../Navbar/KioskNav";

function KioskMain() {
    const navigate = useNavigate();

    return (        
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <Kiosk_Nav/>
            </CircleConatiner>
            <KioskContainer2>
                <FlexBox>
                    <KTLogo/>
                    <LogoTitle>키오스크 체험하기</LogoTitle>
                </FlexBox>
                <KioskChoiceContainer>
                <StyledLink to="/kiosk/movie/start">    
                    <KioskClickBox>
                        <KioskImageBox image={Popcorn}/>
                        <ContentTextBox>
                            <ContentTitle>영화관 키오스크</ContentTitle>
                            <ContentDescript>
                                원하는 영화를 예매해보세요!    
                            </ContentDescript>
                        </ContentTextBox>
                    </KioskClickBox>
                </StyledLink>
                
                <StyledLink to="/kiosk/cafe/start">
                    <KioskClickBox>
                        <HeightImageBox image={Americano}/>
                        <ContentTextBox>
                            <ContentTitle>카페 키오스크</ContentTitle>
                            <ContentDescript>
                                커피, 에이드, 케이크 등의 메뉴를 주문해보세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </KioskClickBox>
                </StyledLink>

                
                <StyledLink to="/kiosk/hamburger/start">    
                    <KioskClickBox>
                        <WidthImageBox image={Hamburger}/>
                        <ContentTextBox>
                            <ContentTitle>패스트푸드 키오스크</ContentTitle>
                            <ContentDescript>
                                햄버거, 너겟, 파이 등의 메뉴를 주문해보세요!
                            </ContentDescript>
                        </ContentTextBox>
                    </KioskClickBox>
                </StyledLink>
                
                <StyledLink to="/kiosk/Icecream_start">    
                    <KioskClickBox>
                        <ImageBox1 image={Icecream}/>
                        <ContentTextBox>
                            <ContentTitle>아이스크림 키오스크</ContentTitle>
                                <ContentDescript>
                                    여러 종류의 아이스크림을 주문해보세요!  
                                </ContentDescript>
                        </ContentTextBox>
                    </KioskClickBox>
                </StyledLink>
                </KioskChoiceContainer>
            </KioskContainer2>
        </div>
    );
}

export default KioskMain;