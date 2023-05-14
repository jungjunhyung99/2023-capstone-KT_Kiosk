<<<<<<< HEAD:src/pages/KioskMain.tsx
import { StyledLink } from "../component/index-component/styled_index";
import { FlexBox, ImageBox, KTLogo, KioskContainer, NavBar, NextButton, PrevButton } from "../component/kiosk-component/styled_kiosk";
import { ImageBox1 } from "../component/kiosk-component/styled_icecream";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, GameImage, KTImage, KioskImage, LogoTitle, MapImage } from "../component/main_components";
import Hamburger from "../images/Hamburger.png";
import Americano from "../images/Americano_choice.png";
import Popcorn from "../images/popcorn.png";
import Icecream from "../images/Icecream.png"; 
import { useNavigate } from "react-router-dom";

=======
import { StyledLink } from "../../component/index-component/styled_index";
import { FlexBox, ImageBox, ImageLongBox, KTLogo, KioskContainer, NavBar, NextButton, PrevButton } from "../../component/kiosk-component/styled_kiosk";
import { BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, GameImage, KTImage, KioskImage, LogoTitle, MapImage } from "../../component/main_components";
import Hamburger from "../../images/Hamburger.png"
import Americano from "../../images/Americano_choice.png";
import Popcorn from "../../images/popcorn.png";
import { useNavigate } from "react-router-dom";
import Kiosk_Nav from "../Navbar/KioskNav";
>>>>>>> origin/main:src/contents/Main_Content/KioskMain.tsx
function KioskMain() {
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
                    <LogoTitle>키오스크 체험하기</LogoTitle>
                </FlexBox>    
                <StyledLink to="/kiosk/hamburger">    
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

                <StyledLink to="/kiosk/movie">    
                    <ContentClickBox>
                        <ImageLongBox image={Popcorn}/>
                        <ContentTextBox>
                            <ContentTitle>영화관 키오스크</ContentTitle>
                            <ContentDescript>
                                원하는 영화를 예매해보세요!    
                            </ContentDescript>
                        </ContentTextBox>
                    </ContentClickBox>
<<<<<<< HEAD:src/pages/KioskMain.tsx

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

=======
                </StyledLink>
>>>>>>> origin/main:src/contents/Main_Content/KioskMain.tsx
            </KioskContainer>
        </div>
    );
}

export default KioskMain;