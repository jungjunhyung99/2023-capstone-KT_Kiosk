import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamBar } from '../../component/kiosk-component/styled_icecream';
import merona from "../../images/icecream/merona.png";
import subakba from "../../images/icecream/subakba.png";
import zyosba from "../../images/icecream/zyosba.png";
import bosukba from "../../images/icecream/bosukba.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";

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

    const MeronaText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const SubakText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const BosukText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const ZyosText = styled.div`
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

    return(
        <div>
            <Title>Icecream</Title>
            <List>
                <ConeButton onClick={onClickIcecreamCone}>Cone</ConeButton>
                <BarButton>Bar</BarButton>
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
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
                <FirstCount>{number}</FirstCount>
                <SecondCount>{number2}</SecondCount>
                <ThirdCount>{number3}</ThirdCount>
                <FourthCount>{number4}</FourthCount>
            </CountItems>
            <Order onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                   <MeronaText>메로나 : 2,500원 * {number}개 = {2500*number}원</MeronaText>
                            <SubakText>수박바 : 2,000원 * {number2}개 = {2000*number2}원</SubakText>
                            <BosukText>보석바 : 2,500원 * {number3}개 = {2500*number3}원</BosukText>
                            <ZyosText>죠스바 : 2,000원 * {number4}개 = {2000*number4}원</ZyosText> <br />
                            <Total>총 금액 : {2500*number + 2000*number2 + 2500*number3 + 2000*number4}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}

export default Icecream_bar;