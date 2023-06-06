import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamTube } from '../../component/kiosk-component/styled_icecream';
import Yogurt from "../../images/icecream/Yogurt.png";
import Bbabbico from "../../images/icecream/Bbabbico.png";
import Tankboygreengrape from "../../images/icecream/Tankboygreengrape.png";
import Tankboy from "../../images/icecream/Tankboy.png";
import { useState, useCallback } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Modal_Result from "../../component/Modal";
import Modal_Result2 from "../../component/Modal2";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16} from "../../Atom/store";
import { practiceMode2 } from '../../Atom/atom';
import { css, keyframes } from "styled-components";

function Icecream_tube() {
    const navigate = useNavigate();
    const modeRecoil = useRecoilValue(practiceMode2);

    const onClickIcecreamCone = () => {
        navigate('/kiosk/Icecream_cone');
    }

    const onClickIcecreamBar = () => {
        navigate('/kiosk/Icecream_bar');
    }

    const onClickIcecreamFamily = () => {
        navigate('/kiosk/Icecream_family');
    }

    const onClickHome = () => {
        navigate('/kiosk/Icecream');
    }
    
    const [tube_number1, setNumber] = useRecoilState(number9);
    const [tube_number2, setNumber2] = useRecoilState(number10);
    const [tube_number3, setNumber3] = useRecoilState(number11);
    const [tube_number4, setNumber4] = useRecoilState(number12);

    function CONE1() {
        if (cone_number1 > 0) 
        {return "구구콘 : " + 1800 + "원 * " + cone_number1 + "개 = " + 1800*cone_number1 + "원";}
        else if (cone_number1 <= 0)
        {return;}
    }

    function CONE2() {
        if (cone_number2 > 0) 
        {return "돼지콘 : " + 2200 + "원 * " + cone_number2 + "개 = " + 2200*cone_number2 + "원";}
        else if (cone_number2 <= 0)
        {return;}
    }

    function CONE3() {
        if (cone_number3 > 0) 
        {return "월드콘 : " + 2500 + "원 * " + cone_number3 + "개 = " + 2500*cone_number3 + "원";}
        else if (cone_number3 <= 0)
        {return;}
    }

    function CONE4() {
        if (cone_number4 > 0) 
        {return "부라보 : " + 3500 + "원 * " + cone_number4 + "개 = " + 3500*cone_number4 + "원";}
        else if (cone_number4 <= 0)
        {return;}
    }

    function BAR1() {
        if (bar_number1 > 0)
        {return "메로나 : " + 2500 + "원 * " + bar_number1 + "개 = " + 2500*bar_number1 + "원";}
        else if (bar_number1 <= 0)
        {return;}
    }

    function BAR2() {
        if (bar_number2 > 0)
        {return "수박바 : " + 2000 + "원 * " + bar_number2 + "개 = " + 2000*bar_number2 + "원";}
        else if (bar_number2 <= 0)
        {return;}
    }

    function BAR3() {
        if (bar_number3 > 0)
        {return "보석바 : " + 2500 + "원 * " + bar_number3 + "개 = " + 2500*bar_number3 + "원";}
        else if (bar_number3 <= 0)
        {return;}
    }

    function BAR4() {
        if (bar_number4 > 0)
        {return "죠스바 : " + 2000 + "원 * " + bar_number4 + "개 = " + 2000*bar_number4 + "원";}
        else if (bar_number4 <= 0)
        {return;}
    }

    function TUBE1() {
        if (tube_number1 > 0)
        {return "요구르트쭈쭈바 : " + 3500 + "원 * " + tube_number1 + "개 = " + 3500*tube_number1 + "원";}
        else if (tube_number1 <= 0)
        {return;}
    }

    function TUBE2() {
        if (tube_number2 > 0)
        {return "빠삐코 : " + 3000 + "원 * " + tube_number2 + "개 = " + 3000*tube_number2 + "원";}
        else if (tube_number2 <= 0)
        {return;}
    }

    function TUBE3() {
        if (tube_number3 > 0)
        {return "탱크보이청포도 : " + 3500 + "원 * " + tube_number3 + "개 = " + 3500*tube_number3 + "원";}
        else if (tube_number3 <= 0)
        {return;}
    }

    function TUBE4() {
        if (tube_number4 > 0)
        {return "탱크보이 : " + 3000 + "원 * " + tube_number4 + "개 = " + 3000*tube_number4 + "원";}
        else if (tube_number4 <= 0)
        {return;}
    }

    function FAMILY1() {
        if (family_number1 > 0)
        {return "팥빙수 : " + 3500 + "원 * " + family_number1 + "개 = " + 3500*family_number1 + "원";}
        else if (family_number1 <= 0)
        {return;}
    }

    function FAMILY2() {
        if (family_number2 > 0)
        {return "투게더 : " + 3500 + "원 * " + family_number2 + "개 = " + 3500*family_number2 + "원";}
        else if (bar_number2 <= 0)
        {return;}
    }

    function FAMILY3() {
        if (family_number3 > 0)
        {return "나뚜르 : " + 4000 + "원 * " + family_number3 + "개 = " + 4000*family_number3 + "원";}
        else if (family_number3 <= 0)
        {return;}
    }

    function FAMILY4() {
        if (family_number4 > 0)
        {return "구구크러스터 : " + 3500 + "원 * " + family_number4 + "개 = " + 3500*family_number4 + "원";}
        else if (family_number4 <= 0)
        {return;}
    }
    
    function RESULT_PRINT() {
        return (<RESULTTEXT>주문 결과</RESULTTEXT>);
    }
    
    function ANSWER_PRINT() {
        if ((cone_number1 == 0) && (cone_number2 == 0) && (cone_number3 == 0) && (cone_number4 == 0) && (bar_number1 == 0) && (bar_number2 == 0) 
        && (bar_number3 == 0) && (bar_number4 == 0) && (tube_number1 == 0) && (tube_number2 == 3) && (tube_number3 == 0) && (tube_number4 == 0)
        && (family_number1 == 0) && (family_number2 == 0) && (family_number3 == 0) && (family_number4 == 0))
        {return (<SUCCESSTEXT>"성공하셨습니다!"</SUCCESSTEXT>);}
        else
        {return (<FAILURETEXT>"실패하셨습니다!"</FAILURETEXT>);}
    }

    function PERCENT_PRINT() {
        let PERCENT_VALUE = Math.round(tube_number2/3*100);

        if (tube_number2 <= 3) return PERCENT_VALUE;
        else if ((tube_number2==0) || (tube_number2>3)) return 50;
    }

    const cone_number1 = useRecoilValue(number1);
    const cone_number2 = useRecoilValue(number2);
    const cone_number3 = useRecoilValue(number3);
    const cone_number4 = useRecoilValue(number4);
    
    const bar_number1 = useRecoilValue(number5);
    const bar_number2 = useRecoilValue(number6);
    const bar_number3 = useRecoilValue(number7);
    const bar_number4 = useRecoilValue(number8);
    
    const family_number1 = useRecoilValue(number13);
    const family_number2 = useRecoilValue(number14);
    const family_number3 = useRecoilValue(number15);
    const family_number4 = useRecoilValue(number16);

    const btn_first_click = () => {
        setNumber(tube_number1 + 1);
    }

    const btn_second_click = () => {
        setNumber2(tube_number2 + 1);
    }
    
    const btn_third_click = () => {
        setNumber3(tube_number3 + 1);
    }

    const btn_fourth_click = () => {
        setNumber4(tube_number4 + 1);
    }

    const btn_first_minus_click = () => {
        if (tube_number1 > 0)
            setNumber(tube_number1 - 1);
    }

    const btn_second_minus_click = () => {
        if (tube_number2 > 0)
            setNumber2(tube_number2 - 1);
    }

    const btn_third_minus_click = () => {
        if (tube_number3 > 0)
            setNumber3(tube_number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        if (tube_number4 > 0)
            setNumber4(tube_number4 - 1);
    }

    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [isOpenModal2, setOpenModal2] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const onClickToggleModal2 = useCallback(() => {
        setOpenModal2(!isOpenModal2);
    }, [isOpenModal2]);

    const Title = styled.div`
        width: 80vw;
        font-size: 45px;
        display: flex;
        justify-content: center;
        background-color: #008299;
        height: 100px;
        font-style: italic;
        align-items: center;
        font-weight: bold;
        `;

    const List = styled.div`
        width: 80vw;
        height: 80px;
        display: flex;
        background-color: #3DB7CC;
        `;

    const ConeButton = styled.div`
        font-size: 35px;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
        }
        width: 27%;
        display: flex;
        justify-content: center; 
        align-items: center;
        font-weight: bold;
        `;

    const BarButton = styled.div`
        font-size: 35px;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
        }
        width: 27%;
        margin-left: 15px;
        display: flex;
        justify-content: center; 
        align-items: center;
        font-weight: bold;
    `;

    const TubeButton = styled.div`
        font-size: 35px;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
        }
        width: 27%;
        margin-left: 15px;
        display: flex;
        justify-content: center; 
        align-items: center;
        font-weight: bold;
    `;

    const FamilyButton = styled.div`
        font-size: 35px;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
        }
        width: 27%;
        margin-left: 15px;
        display: flex;
        justify-content: center; 
        align-items: center;
        font-weight: bold;
    `;

    const Space = styled.div`
        display:flex;
        height: 90px;
    `;

    const Items = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        left: 60px;
    `;

    const YogurtBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 4.5rem;
    `;

    const BbabbicoBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 5.2em;
    `;

    const TankboygreengrapeBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3.6rem;
    `;

    const TankboyBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3rem;
    `;

    const YogurtPrice = styled.div`
        font-size: 30px;
    `;

    const BbabbicoPrice = styled.div`
        font-size: 30px;
    `

    const TankboygreengrapePrice = styled.div`
        font-size: 30px;
    `;

    const TankboyPrice = styled.div`
        font-size: 30px;
    `;

    const PlusDivButton = styled.div`
        display: flex;
        justify-content: center;  
        position: relative;
        left: 28px;
    `;

    const FirstPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 315px;
        &:hover {
            background-color: #FAF4C0;
        }
        z-index: 100;
    `;

    const fadeInOut = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
        border-color: transparent;
    }
    50%{
        border-color: red;
    }
    100% {
        border-color: transparent;
        box-shadow: 0 0 0 1.5rem rgba(255, 0, 0, 0);
    }
    `;
    const SecondPlusButton = styled.button<{mode: boolean}>`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 37px;
        &:hover {
            background-color: #FAF4C0;
        }
        z-index: 100;
        ${(props) =>
            props.mode &&
            css`
                border: 4px dashed transparent;
                animation: ${fadeInOut} 2s infinite;
            `}
    `;

    const ThirdPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 249px;
        &:hover {
            background-color: #FAF4C0;
        }
        z-index: 100;
    `;

    const FourthPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 532px;
        &:hover {
            background-color: #FAF4C0;
        }
        z-index: 100;
    `;

    const FirstPlusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const SecondPlusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const ThirdPlusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const FourthPlusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const MinusDivButton = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        right: 250px;
        bottom: 50px;
    `;

    const FirstMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 315px;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const SecondMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 27px;
        ;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const ThirdMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 252px;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const FourthMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 537px;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const FirstMinusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const SecondMinusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const ThirdMinusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const FourthMinusButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;
    const CountItems = styled.div`
        display: flex;
        justify-content: center;
        font-size: 90px;
    `;

    const FirstCount = styled.div`
        position: relative;
        right: 400px;
    `;

    const SecondCount = styled.div`
        position: relative;
        right: 130px;
    `;

    const ThirdCount = styled.div`
        position: relative;
        left: 130px;
    `;

    const FourthCount = styled.div`
        position: relative;
        left: 390px;
    `;

    const Order = styled.button<{mode: boolean}>`
        width: 80vw;
        font-size: 35px;
        background-color: #3DB7CC;
        border-width: 1px;
        height: 100px;
        font-color: white;
        ${(props) =>
            props.mode &&
            css`
                border: 4px dashed transparent;
                animation: ${fadeInOut} 2s infinite;
            `}
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const OrderDiv = styled.div`
        width: 80vw;
        color: black;
        font-weight: bold;
    `;

    const RESULTTEXT = styled.div`
        font-size: 40px;
        position: relative;
        font-weight: bold;
        color: black;
        background-color: #D4F4FA;
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
    `;

    const SUCCESSTEXT = styled.div`
        font-size: 40px;
        position: relative;
        top: 280px;
        font-weight: bold;
        color: blue;
    `;

    const FAILURETEXT = styled.div`
        font-size: 40px;
        position: relative;
        top: 280px;
        font-weight: bold;
        color: red;
    `;

    const Text = styled.div`
        font-size: 27px;
        position: relative;
        top: -10px;
    `;

    const Total = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const Close = styled.button`
        font-size: 30px;
        width: 100px;
        position: relative;
        top: 65px;
        background-color: #D4F4FA;
        &:hover {
            background-color: #FAF4C0;
        }
        font-weight: bold;
        height: 50px;
    `;


    const Entire = styled.div`
        background-color: white;
    `;

    const Two_Button = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 600px;
    `;

    const Home_Button = styled.div`
        font-size: 35px;
        width: 350px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-color: #D4F4FA;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const Result = styled.div`
        font-size: 35px;
        width: 350px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-color: #D4F4FA;
        &:hover {
            background-color: #FAF4C0;
        }
    `;

    const LookResult = styled.div`
        font-size: 40px;
        position: relative;
        font-weight: bold;
        color: black;
        background-color: #D4F4FA;
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        margin-top: -10px;
    `;

    const Final = styled.div`
        background-color: black;
        height: 300px;
    `;

    return(
        <div>
            <Title>Icecream</Title>
            <List>
                <ConeButton onClick={onClickIcecreamCone}>Cone</ConeButton>
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Entire>
            <Space></Space>
            <Items>
                <YogurtBox><ImageBox_IcecreamTube image={Yogurt}/><YogurtPrice>3,500원</YogurtPrice></YogurtBox>
                <BbabbicoBox><ImageBox_IcecreamTube image={Bbabbico}/><BbabbicoPrice>3,000원</BbabbicoPrice></BbabbicoBox>
                <TankboygreengrapeBox><ImageBox_IcecreamTube image={Tankboygreengrape}/><TankboygreengrapePrice>3,500원</TankboygreengrapePrice></TankboygreengrapeBox>
                <TankboyBox><ImageBox_IcecreamTube image={Tankboy}/><TankboyPrice>3,000원</TankboyPrice></TankboyBox>
            </Items>
            <PlusDivButton>
                <FirstPlusButton onClick={() => {btn_first_click();}}><FirstPlusButtonDiv>+</FirstPlusButtonDiv></FirstPlusButton>
                <SecondPlusButton mode={modeRecoil.icecream} onClick={() => {btn_second_click();}}><SecondPlusButtonDiv>+</SecondPlusButtonDiv></SecondPlusButton>
                <ThirdPlusButton onClick={() => {btn_third_click();}}><ThirdPlusButtonDiv>+</ThirdPlusButtonDiv></ThirdPlusButton>
                <FourthPlusButton onClick={() => {btn_fourth_click();}}><FourthPlusButtonDiv>+</FourthPlusButtonDiv></FourthPlusButton>
            </PlusDivButton>
            <MinusDivButton>
                <FirstMinusButton onClick={() => {btn_first_minus_click();}}><FirstMinusButtonDiv>-</FirstMinusButtonDiv></FirstMinusButton>
                <SecondMinusButton onClick={() => {btn_second_minus_click();}}><SecondMinusButtonDiv>-</SecondMinusButtonDiv></SecondMinusButton>
                <ThirdMinusButton onClick={() => {btn_third_minus_click();}}><ThirdMinusButtonDiv>-</ThirdMinusButtonDiv></ThirdMinusButton>
                <FourthMinusButton onClick={() => {btn_fourth_minus_click();}}><FourthMinusButtonDiv>-</FourthMinusButtonDiv></FourthMinusButton>
            </MinusDivButton>
            <CountItems>
                <FirstCount>{tube_number1}</FirstCount>
                <SecondCount>{tube_number2}</SecondCount>
                <ThirdCount>{tube_number3}</ThirdCount>
                <FourthCount>{tube_number4}</FourthCount>
            </CountItems>
            </Entire>
            <Order mode={modeRecoil.icecream} onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal_Result onClickToggleModal={onClickToggleModal}>
                    {RESULT_PRINT()}<br></br>
                    {ANSWER_PRINT()}<br></br>
                    <Two_Button>
                        <Home_Button onClick={onClickHome}>홈으로 이동</Home_Button>  
                        <Result onClick={onClickToggleModal2}>기록 보기</Result>   
                            {isOpenModal2 && (
                                <Modal_Result2 onClickToggleModal2={onClickToggleModal2}><LookResult>기록 보기</LookResult><br/>
                                    <Text>{CONE1()}</Text>
                                    <Text>{CONE2()}</Text>
                                    <Text>{CONE3()}</Text>
                                    <Text>{CONE4()}</Text>

                                    <Text>{BAR1()}</Text>
                                    <Text>{BAR2()}</Text>
                                    <Text>{BAR3()}</Text>
                                    <Text>{BAR4()}</Text>

                                    <Text>{TUBE1()}</Text>
                                    <Text>{TUBE2()}</Text>
                                    <Text>{TUBE3()}</Text>
                                    <Text>{TUBE4()}</Text>

                                    <Text>{FAMILY1()}</Text>
                                    <Text>{FAMILY2()}</Text>
                                    <Text>{FAMILY3()}</Text>
                                    <Text>{FAMILY4()}</Text>
                                            
                                    <Total>총 금액 : {2500*cone_number1 + 2200*cone_number2 + 2500*cone_number3 + 3500*cone_number4 
                                        + 2500*bar_number1 + 2000*bar_number2 + 2500*bar_number3 + 2000* bar_number4
                                        + 3500*tube_number1 + 3000*tube_number2 + 3500*tube_number3 + 3000*tube_number4
                                        + 3500*family_number1 + 3500*family_number2 + 4000*family_number3 + 3500*family_number4}원, 
                                        정답률 : {PERCENT_PRINT()}%
                                    </Total>
                                    <Close onClick={() => setOpenModal(false)}>닫기</Close> 
                                </Modal_Result2>
                            )}   
                    </Two_Button>
                </Modal_Result>
            )}<Final></Final>
        </div>
    );
}


export default Icecream_tube;