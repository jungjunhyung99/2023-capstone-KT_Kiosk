import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InitButton } from "../../component/kiosk-component/styled_hamburger";
import { IAtomFast, fastAnswer, practiceMode } from "../../Atom/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { BerverageMenu, HamburgerMenu } from "../Cafe_Content/data";
import { useEffect } from "react";
import KTLogo2 from "../../images/KTLogo3.svg";
import { ImageBox, ModeBox } from "../../component/kiosk-component/styled_kiosk";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:40rem;
  height:100vh;
  background-color: #FF1F41;
  color:white;
`;

const Banner = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:85%;
`;

const Bottom = styled.div`
    display: block;
    margin-top: 30px;
    cursor: pointer;
    
`;


function Hamburger_main(){
    let navigate = useNavigate();
    const take = ["포장주문", "매장식사"];
    const [answerRecoil, setAnswerRecoil] = useRecoilState<IAtomFast>(fastAnswer);
    const modeRecoil = useRecoilValue(practiceMode);
    const getAnswer = () => {
        // const idx1 = Math.floor(Math.random()*3);
        // const idx2 = Math.floor(Math.random()*3);
        // const idx3 = Math.floor(Math.random()*2);
        // setAnswerRecoil({
        //     takeout: take[idx3],
        //     item:[
        //         {
        //             id: "0",
        //             category: take[idx3],
        //             name: HamburgerMenu[idx1].name,
        //             cost: HamburgerMenu[idx1].cost,
        //             cal: HamburgerMenu[idx1].cal,
        //             quantity: idx1 + 1,
        //             img: " "
        //         },
        //         {
        //             id: "1",
        //             category: take[idx3],
        //             name: BerverageMenu[idx1].name,
        //             cost: BerverageMenu[idx1].cost,
        //             cal: BerverageMenu[idx1].cal,
        //             quantity: idx2 + 1,
        //             img: " "
        //         }
        //     ]
        // });

        // 답안은 마지막에
};

    useEffect(() => {
        getAnswer();
    },[]);
    return(
    <Container>
        <Banner>
            <div style={{display: "flex", fontWeight:"800" ,alignItems:"center", justifyContent:"center", fontSize:"70px",transform:`translateY(-30%)`,textAlign:"center"}}>    
            <ModeBox image={KTLogo2}/>
            <div>패스트푸드</div>
            </div>
            <div style={{fontSize: "40px",fontWeight:"700"}}>광운대점</div>
        </Banner>
        <InitButton mode={modeRecoil.hamburger} onClick={() => navigate("/kiosk/hamburger/take")}>
            여기를 클릭해 주세요!
        </InitButton>
    </Container>
   );
}

export default Hamburger_main;