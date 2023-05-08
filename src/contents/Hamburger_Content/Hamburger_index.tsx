import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { fastAnswer, fastObj } from "../../Atom/atom";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    display:flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100%;
`;

const Button = styled.button`
    width:13vw;
    height: 10vh;
    margin:20px;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    background-color: #FFFFFF;
    border:none;
    box-shadow:  3px 3px 6px 3px #2b2a2a;
    cursor: pointer;
`;

const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

function Hamburger_index() {
    const navigate = useNavigate();
    const [cafeRecoil, setCafeRecoil] = useRecoilState(fastObj);
    const [answerRecoil, setAnswerRecoil] = useRecoilState(fastAnswer);
    const buttonClick = (choice:string) => {
        setCafeRecoil({takeout:choice, item:[]});
        navigate("/Menu/home/hard/hamburger/choice");
        
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
                    <Button onClick={() => buttonClick("포장주문")}>
                        포장하기
                    </Button>
                </Box>
                <Box>
                    <Button onClick={() => buttonClick("매장식사")}>
                        매장식사
                    </Button>
                </Box>
            </div>
        </Container>
    );
}

export default Hamburger_index;