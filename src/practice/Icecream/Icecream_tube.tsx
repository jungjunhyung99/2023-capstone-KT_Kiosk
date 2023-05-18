import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamFamily, ImageBox_IcecreamFamilyNattur, ImageBox_IcecreamFamilyGoogoo} from '../../component/kiosk-component/styled_icecream';
import Bingsoo from "../../images/icecream/Bingsoo.png";
import Together from "../../images/icecream/Together.png";
import Nattur from "../../images/icecream/Nattur.png";
import Googoocluster from "../../images/icecream/Googoocluster.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";

function Icecream_bar() {

    const navigate = useNavigate();

    const onClickIcecreamCone = () => {
        navigate('/kiosk/Icecream_cone');
    }

    const onClickIcecreamBar = () => {
        navigate('/kiosk/Icecream_bar');
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

    const BingsooBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 4.5rem;
    `;

    const TogetherBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 5.2em;
    `;

    const NatturBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3.6rem;
    `;

    const GoogooclusterBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3rem;
    `;

    const BingsooPrice = styled.div`
        font-size: 30px;
    `;

    const TogetherPrice = styled.div`
        font-size: 30px;
    `

    const NatturPrice = styled.div`
        font-size: 30px;
    `;

    const GoogooclusterPrice = styled.div`
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
        right: 287px;
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
        right: 10px;
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
        left: 277px;
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
        left: 560px;
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
        right: 272px;
        bottom: 50px;
    `;

    const FirstMinusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 287px;
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
        right: 10px;
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
        left: 277px;
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
        left: 560px;
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

    const BingsooText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const TogetherText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const NatturText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const GoogooclusterText = styled.div`
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
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamBar}>Family</FamilyButton>
            </List>
            <Entire>
            <Space></Space>
            <Items>
                <BingsooBox><ImageBox_IcecreamFamily image={Bingsoo}/><BingsooPrice>3,500원</BingsooPrice></BingsooBox>
                <TogetherBox><ImageBox_IcecreamFamily image={Together}/><TogetherPrice>3,500원</TogetherPrice></TogetherBox>
                <NatturBox><ImageBox_IcecreamFamilyNattur image={Nattur}/><NatturPrice>4,000원</NatturPrice></NatturBox>
                <GoogooclusterBox><ImageBox_IcecreamFamilyGoogoo image={Googoocluster}/><GoogooclusterPrice>3,500원</GoogooclusterPrice></GoogooclusterBox>
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
            </Entire>
            <Order onClick={onClickToggleModal}><OrderDiv>주문하기</OrderDiv></Order>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                   <BingsooText>팥빙수 : 3,500원 * {number}개 = {3500*number}원</BingsooText>
                            <TogetherText>투게더 : 3,500원 * {number2}개 = {3500*number2}원</TogetherText>
                            <NatturText>나뚜루 : 4,000원 * {number3}개 = {4000*number3}원</NatturText>
                            <GoogooclusterText>구구크러스터 : 3,500원 * {number4}개 = {3500*number4}원</GoogooclusterText> <br />
                            <Total>총 금액 : {3500*number + 3500*number2 + 4000*number3 + 3500*number4}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}


export default Icecream_bar;