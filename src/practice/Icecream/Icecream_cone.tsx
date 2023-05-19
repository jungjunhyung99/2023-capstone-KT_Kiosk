import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamCone } from '../../component/kiosk-component/styled_icecream';
import Gugucone from "../../images/icecream/Gugucone.png";
import Pigcone from "../../images/icecream/Pigcone.png";
import Worldcone from "../../images/icecream/Worldcone.png";
import Boorabo from "../../images/icecream/Boorabo.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16} from "../../Atom/store";

function Icecream_cone() {

    const navigate = useNavigate();

    const onClickIcecreamBar = () => {
        navigate('/kiosk/Icecream_bar');
    }

    const onClickIcecreamTube = () => {
        navigate('/kiosk/Icecream_tube');
    }

    const onClickIcecreamFamily = () => {
        navigate('/kiosk/Icecream_family');
    }    
    
    const [cone_number1, setNumber] = useRecoilState(number1);
    const [cone_number2, setNumber2] = useRecoilState(number2);
    const [cone_number3, setNumber3] = useRecoilState(number3);
    const [cone_number4, setNumber4] = useRecoilState(number4);

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
        
    const bar_number1 = useRecoilValue(number5);
    const bar_number2 = useRecoilValue(number6);
    const bar_number3 = useRecoilValue(number7);
    const bar_number4 = useRecoilValue(number8);

    const tube_number1 = useRecoilValue(number9);
    const tube_number2 = useRecoilValue(number10);
    const tube_number3 = useRecoilValue(number11);
    const tube_number4 = useRecoilValue(number12);
    
    const family_number1 = useRecoilValue(number13);
    const family_number2 = useRecoilValue(number14);
    const family_number3 = useRecoilValue(number15);
    const family_number4 = useRecoilValue(number16);

    const btn_first_click = () => {
        setNumber(cone_number1 + 1);
    }

    const btn_second_click = () => {
        setNumber2(cone_number2 + 1);
    }

    const btn_third_click = () => {
        setNumber3(cone_number3 + 1);
    }

    const btn_fourth_click = () => {
        setNumber4(cone_number4 + 1);
    }

    const btn_first_minus_click = () => {
        if (cone_number1 > 0)
            setNumber(cone_number1 - 1);
    }

    const btn_second_minus_click = () => {
        if (cone_number2 > 0)
            setNumber2(cone_number2 - 1);
    }

    const btn_third_minus_click = () => {
        if (cone_number3 > 0)
            setNumber3(cone_number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        if (cone_number4 > 0)
            setNumber4(cone_number4 - 1);
    }

    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const Title = styled.div`
        width: 80vw;
        font-size: 45px;
        display: flex;
        justify-content: center;
        background-color: #CCA63D;
        height: 100px;
        font-style: italic;
        align-items: center;
        `;

    const List = styled.div`
        width: 80vw;
        height: 80px;
        display: flex;
        background-color: #FFE08C;
        `;

    const ConeButton = styled.button`
        font-size: 30px;
        background-color: #FFE08C;
        &:hover {
            background-color: lightyellow;
        }
        width: 25%;
        `;

    const BarButton = styled.button`
        font-size: 30px;
        background-color: #FFE08C;
        &:hover {
            background-color: lightyellow;
        }
        width: 25%;
    `;

    const TubeButton = styled.button`
        font-size: 30px;
        background-color: #FFE08C;
        &:hover {
            background-color: lightyellow;
        }
        width: 25%;
    `;

    const Space = styled.div`
        display:flex;
        height: 90px;
    `;

    const FamilyButton = styled.button`
        font-size: 30px;
        background-color: #FFE08C;
        &:hover {
            background-color: lightyellow;
        }
        width: 25%;
    `;

    const Items = styled.div`
        display: flex;
        justify-content: center;
    `;

    const GuguconeBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 12.5rem;
    `;

    const PigconeBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 5.2em;
    `;

    const WorldconeBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        left: 4.3rem;
    `;

    const BooraboBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        left: 12.6rem;
    `;

    const GuguconePrice = styled.div`
        font-size: 30px;
    `;

    const PigconePrice = styled.div`
        font-size: 30px;
    `;

    const WorldconePrice = styled.div`
        font-size: 30px;
    `;

    const BooraboPrice = styled.div`
        font-size: 30px;
    `;
    
    const PlusDivButton = styled.div`
        display: flex;
        justify-content: center;  
    `;

    const FirstPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 315px;
        &:hover {
            background-color: lightyellow;
        }
        z-index: 100;
    `;

    const SecondPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 70px;
        &:hover {
            background-color: lightyellow;
        }
        z-index: 100;
    `;

    const ThirdPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 183px;
        &:hover {
            background-color: lightyellow;
        }
        z-index: 100;
    `;

    const FourthPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 430px;
        &:hover {
            background-color: lightyellow;
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
        right: 110px;
        bottom: 50px;
    `;

    const FirstMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 315px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const SecondMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 70px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const ThirdMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 183px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const FourthMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 430px;
        &:hover {
            background-color: lightyellow;
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

    const Order = styled.button`
        width: 80vw;
        font-size: 30px;
        background-color: red;
        border-width: 1px;
        height: 100px;
        font-color: white;
    `;

    const OrderDiv = styled.div`
        width: 80vw;
        color: white;
    `;

    const Text = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const Total = styled.div`
        font-size: 30px;
        position: relative;
        top: 70px;
    `;

    const Close = styled.button`
        font-size: 30px;Warning
        width: 100px;
        position: relative;
        top: 100px;
        background-color: lightblue;
    `;

    const Entire = styled.div`
        background-color: white;
    `;

    return(
    <RecoilRoot>
        <div>
            <Title>Icecream</Title>
            <List>
                <ConeButton>Cone</ConeButton>
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Entire>
            <Space></Space>
            <Items>
                <GuguconeBox><ImageBox_IcecreamCone image={Gugucone}/><GuguconePrice>1,800원</GuguconePrice></GuguconeBox>
                <PigconeBox><ImageBox_IcecreamCone image={Pigcone}/><PigconePrice>2,200원</PigconePrice></PigconeBox>
                <WorldconeBox><ImageBox_IcecreamCone image={Worldcone}/><WorldconePrice>2,500원</WorldconePrice></WorldconeBox>
                <BooraboBox><ImageBox_IcecreamCone image={Boorabo}/><BooraboPrice>3,500원</BooraboPrice></BooraboBox>
            </Items>
            <PlusDivButton>
                <FirstPlusButton onClick={() => {btn_first_click();}}><FirstPlusButtonDiv>+</FirstPlusButtonDiv></FirstPlusButton>
                <SecondPlusButton onClick={() => {btn_second_click();}}><SecondPlusButtonDiv>+</SecondPlusButtonDiv></SecondPlusButton>
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
                <FirstCount>{cone_number1}</FirstCount>
                <SecondCount>{cone_number2}</SecondCount>
                <ThirdCount>{cone_number3}</ThirdCount>
                <FourthCount>{cone_number4}</FourthCount>
            </CountItems>
            </Entire>
            <Order onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>       
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
                        + 3500*family_number1 + 3500*family_number2 + 4000*family_number3 + 3500*family_number4}원</Total>
                    <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    </RecoilRoot>
    );
}

export default Icecream_cone;