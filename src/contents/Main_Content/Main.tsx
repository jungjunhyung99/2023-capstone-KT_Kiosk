import { BackCircle, BackCircle2, CircleConatiner, ContentClickBox, ContentContainer, ContentDescript, ContentTextBox, ContentTitle, GameImage, KTImage, KioskImage, LogoTitle, MapImage } from "../../component/main_components";
import { StyledLink } from "../../component/index-component/styled_index";
function Main () {
    return(
        <div>
            <CircleConatiner>
                <BackCircle2/>
                <BackCircle>
                    <KTImage/>
                    <LogoTitle>교육용 웹 키오스크 </LogoTitle> 
                </BackCircle>
            </CircleConatiner>
            <ContentContainer>
                
            <StyledLink to="/kiosk">    
                <ContentClickBox>
                    <KioskImage/>
                    <ContentTextBox>
                        <ContentTitle>키오스크 연습하기</ContentTitle>
                        <ContentDescript>
                            카페, 패스트푸드, 영화관 등의 키오스크를 연습해보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
            </StyledLink>

            <StyledLink to="/game">
                <ContentClickBox>
                    <GameImage/>
                    <ContentTextBox>
                        <ContentTitle>뇌활력 게임하기</ContentTitle>
                        <ContentDescript>
                            숫자게임, 글자게임 등의 뇌할력 게임을 즐겨보세요!
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
            </StyledLink>
                <ContentClickBox>
                    <MapImage/>
                    <ContentTextBox>
                        <ContentTitle>키오스크 설명서 </ContentTitle>
                        <ContentDescript>
                            간단한 키오스크 설명을 읽어주세요!    
                        </ContentDescript>
                    </ContentTextBox>
                </ContentClickBox>
            
            </ContentContainer>
        </div>
    );
}

export default Main;