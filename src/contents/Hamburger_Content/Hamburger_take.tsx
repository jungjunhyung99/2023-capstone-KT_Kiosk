import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { fastObj, fastAnswer } from "../../Atom/atom";
import { HallButton, TakeButton } from "../../component/kiosk-component/styled_hamburger";

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
    const [cafeRecoil, setCafeRecoil] = useRecoilState(fastObj);
    const [answerRecoil, setAnswerRecoil] = useRecoilState(fastAnswer);
    const buttonClick = (choice:string) => {
        setCafeRecoil({takeout:choice, item:[]});
        navigate("/kiosk/hamburger/choice");        
    };

    console.log(answerRecoil);

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
                    <TakeButton answer={answerRecoil.takeout} onClick={() => buttonClick("포장주문")}>
                        포장하기
                    </TakeButton>
                </Box>
                <Box>
                    <HallButton answer={answerRecoil.takeout} onClick={() => buttonClick("매장식사")}>
                        매장식사
                    </HallButton>
                </Box>
            </div>
        </Container>
    );
}

export default Hamburger_take;