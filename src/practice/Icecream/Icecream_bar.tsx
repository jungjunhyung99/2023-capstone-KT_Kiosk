import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamBar } from '../../component/kiosk-component/styled_icecream';
import merona from "../../images/icecream/merona.png";
import subakba from "../../images/icecream/subakba.png";
import zyosba from "../../images/icecream/zyosba.png";
import bosukba from "../../images/icecream/bosukba.png";
import { useState, useCallback } from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from "recoil";
import Modal from "../../component/Modal";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16} from "../../Atom/store";

function Icecream_bar() {

    const navigate = useNavigate();

    const onClickIcecreamCone = () => {
        navigate('/kiosk/Icecream_cone');
    }

    const onClickIcecreamTube = () => {
        navigate('/kiosk/Icecream_tube');
    }

    const onClickIcecreamFamily = () => {
        navigate('/kiosk/Icecream_family');
    }
    
    const [bar_number1, setNumber5] = useRecoilState(number5);
    const [bar_number2, setNumber6] = useRecoilState(number6);
    const [bar_number3, setNumber7] = useRecoilState(number7);
    const [bar_number4, setNumber8] = useRecoilState(number8);

    const cone_number1 = useRecoilValue(number1);
    const cone_number2 = useRecoilValue(number2);
    const cone_number3 = useRecoilValue(number3);
    const cone_number4 = useRecoilValue(number4);
    
    const tube_number1 = useRecoilValue(number9);
    const tube_number2 = useRecoilValue(number10);
    const tube_number3 = useRecoilValue(number11);
    const tube_number4 = useRecoilValue(number12);
    
    const family_number1 = useRecoilValue(number13);
    const family_number2 = useRecoilValue(number14);
    const family_number3 = useRecoilValue(number15);
    const family_number4 = useRecoilValue(number16);

    const btn_first_click = () => {
        setNumber5(bar_number1 + 1);
    }

    const btn_second_click = () => {
        setNumber6(bar_number2 + 1);
    }

    const btn_third_click = () => {
        setNumber7(bar_number3 + 1);
    }

    const btn_fourth_click = () => {
        setNumber8(bar_number4 + 1);
    }

    const btn_first_minus_click = () => {
        if (bar_number1 > 0)
        setNumber5(bar_number1 - 1);
    }

    const btn_second_minus_click = () => {
        if (bar_number2 > 0)
        setNumber6(bar_number2 - 1);
    }

    const btn_third_minus_click = () => {
        if (bar_number3 > 0)
        setNumber7(bar_number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        if (bar_number4 > 0)
        setNumber8(bar_number4 - 1);
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

    const FamilyButton = styled.button`
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
    const Items = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        left: 60px;
    `;

    const MeronaBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 4.5rem;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const SubakbaBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 5.2em;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const BosukbaBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3.6rem;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const ZyosbaBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3rem;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const MeronaPrice = styled.div`
        font-size: 30px;
    `;

    const SubakbaPrice = styled.div`
        font-size: 30px;
    `

    const BosukbaPrice = styled.div`
        font-size: 30px;
    `;

    const ZyosbaPrice = styled.div`
        font-size: 30px;
    `;

    const PlusDivButton = styled.div`
        display: flex;
        justify-content: center;  
        position: relative;
        left: 59px;
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
        left: 436px;
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
        right: 180px;
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
        left: 436px;
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
        font-size: 30px;
        width: 100px;
        position: relative;
        top: 100px;
        background-color: lightblue;
    `;

    const Entire = styled.div`
        background-color: white;
    `;

    return(
        <div>
           <Title>Icecream</Title>
            <List>
                <ConeButton onClick={onClickIcecreamCone}>Cone</ConeButton>
                <BarButton>Bar</BarButton>
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Entire>
            <Space></Space>
            <Items>
                <MeronaBox><ImageBox_IcecreamBar image={merona}/><MeronaPrice>2,500원</MeronaPrice></MeronaBox>
                <SubakbaBox><ImageBox_IcecreamBar image={subakba}/><SubakbaPrice>2,000원</SubakbaPrice></SubakbaBox>
                <BosukbaBox><ImageBox_IcecreamBar image={bosukba}/><BosukbaPrice>2,500원</BosukbaPrice></BosukbaBox>
                <ZyosbaBox><ImageBox_IcecreamBar image={zyosba}/><ZyosbaPrice>2,000원</ZyosbaPrice></ZyosbaBox>
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
                <FirstCount>{bar_number1}</FirstCount>
                <SecondCount>{bar_number2}</SecondCount>
                <ThirdCount>{bar_number3}</ThirdCount>
                <FourthCount>{bar_number4}</FourthCount>
            </CountItems>
            </Entire>
            <Order onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <Total>총 금액 : {2500*cone_number1 + 2200*cone_number2 + 2500*cone_number3 + 3500*cone_number4 
                            + 2500*bar_number1 + 2000*bar_number2 + 2500*bar_number3 + 2000* bar_number4
                            + 3500*tube_number1 + 3000*tube_number2 + 3500*tube_number3 + 3000*tube_number4
                            + 3500*family_number1 + 3500*family_number2 + 4000*family_number3 + 3500*family_number4}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}

export default Icecream_bar;