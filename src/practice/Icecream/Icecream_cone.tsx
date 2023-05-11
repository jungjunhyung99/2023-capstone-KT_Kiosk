import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamCone } from '../../component/kiosk-component/styled_icecream';
import Gugucone from "../../images/icecream/Gugucone.png";
import Pigcone from "../../images/icecream/Pigcone.png";
import Worldcone from "../../images/icecream/Worldcone.png";
import Boorabo from "../../images/icecream/Boorabo.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";

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

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    const btn_first_click = () => {
        setNumber(number + 1);
    }

    const btn_second_click = () => {
        setNumber2(number2 + 1);
    }
    
    const btn_third_click = () => {
        setNumber3(number3 + 1);
    }

    const btn_fourth_click = () => {
        setNumber4(number4 + 1);
    }

    const btn_first_minus_click = () => {
        if (number > 0)
            setNumber(number - 1);
    }

    const btn_second_minus_click = () => {
        if (number2 > 0)
            setNumber2(number2 - 1);
    }

    const btn_third_minus_click = () => {
        if (number3 > 0)
            setNumber3(number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        if (number4 > 0)
            setNumber4(number4 - 1);
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
    `

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
        left: 0px;
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

    const GuguText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const PigText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const WorldText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const BooraboText = styled.div`
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

    return(
        <div>
            <Title>Icecream</Title>
            <List>
                <ConeButton>Cone</ConeButton>
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
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
                <FirstCount>{number}</FirstCount>
                <SecondCount>{number2}</SecondCount>
                <ThirdCount>{number3}</ThirdCount>
                <FourthCount>{number4}</FourthCount>
            </CountItems>
            <Order onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                   <GuguText>더블콘 : 2,500원 * {number}개 = {1800*number}원</GuguText>
                            <PigText>돼지콘 : 2,200원 * {number2}개 = {2200*number2}원</PigText>
                            <WorldText>월드콘 : 2,500원 * {number3}개 = {2500*number3}원</WorldText>
                            <BooraboText>요맘때 : 3,500원 * {number4}개 = {3500*number4}원</BooraboText> <br />
                            <Total>총 금액 : {2500*number + 2200*number2 + 2500*number3 + 3500*number4}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}

export default Icecream_cone;