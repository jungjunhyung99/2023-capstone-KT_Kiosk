import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { fastObj, fastAnswer, practiceMode } from "../../Atom/atom";
import { HallButton, TakeButton } from "../../component/kiosk-component/styled_hamburger";
import { useState } from "react";
import { Overlay } from "../../component/game-component/balloon-component";
import { ModalCompleteButton, ModalNavBar, MovieExplain } from "../../component/kiosk-component/styled_movie";
import AnimatedText from "../AnimatedText";

const Container = styled(motion.div)`
    width: 40rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color: #023282;
    color:white;
`;

const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

function Hamburger_take() {
    const navigate = useNavigate();
    const [modalMatch, setModalMatch] = useState(true)
    const [cafeRecoil, setCafeRecoil] = useRecoilState(fastObj);
    const [answerRecoil, setAnswerRecoil] = useRecoilState(fastAnswer);
    const modeRecoil = useRecoilValue(practiceMode);
    const buttonClick = (choice:string) => {
        setCafeRecoil({takeout:choice, item:[]});
        navigate("/kiosk/hamburger/choice");        
    };

    return (
        <Container
        initial={{opacity: 0}}
            animate={{opacity: 1, transition:{
                duration: 0.5,
                delay: 0.2,
            }}}
            exit={{opacity: 0}}>
            <h1>매장식사 유무를 선택해 주세요!</h1>
            <div style={{marginTop:"40px",display:"flex"}}>
                <Box>
                    <TakeButton mode={modeRecoil.hamburger} answer={answerRecoil.takeout} onClick={() => buttonClick("포장주문")}>
                        포장하기
                    </TakeButton>
                </Box>
                <Box>
                    <HallButton mode={modeRecoil.hamburger} answer={answerRecoil.takeout} onClick={() => buttonClick("매장식사")}>
                        매장식사
                    </HallButton>
                </Box>
            {modeRecoil.hamburger && modalMatch ? 
              <>
              <Overlay/>
              <MovieExplain>
                <ModalNavBar>
                  키오스크 지도
                </ModalNavBar>
                <AnimatedText text="일 부 키오스크에서는 포장하기 대신 take out 이라는 말을 사용해요!"/>
                <ModalCompleteButton onClick={() => setModalMatch(false)}>확인하기</ModalCompleteButton>
              </MovieExplain>
              </>
              :
              null
              }
            </div>
        </Container>
    );
}

export default Hamburger_take;