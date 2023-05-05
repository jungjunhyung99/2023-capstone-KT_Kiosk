import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamTube } from '../../component/kiosk-component/styled_kiosk';
import Yogurt from "../../images/icecream/Yogurt.png";
import Bbabbico from "../../images/icecream/Bbabbico.png";
import Tankboygreengrape from "../../images/icecream/Tankboygreengrape.png";
import Tankboy from "../../images/icecream/Tankboy.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";

function Icecream_bar() {

    const navigate = useNavigate();

    const onClickIcecreamCone = () => {
        navigate('/Icecream_cone');
    }

    const onClickIcecreamBar = () => {
        navigate('/Icecream_bar');
    }

    const onClickIcecreamFamily = () => {
        navigate('/Icecream_family');
    }
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

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
        setNumber(number - 1);
    }

    const btn_second_minus_click = () => {
        setNumber2(number2 - 1);
    }

    const btn_third_minus_click = () => {
        setNumber3(number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        setNumber4(number4 - 1);
    }

    const Count = () => {
        setCount(count + 1);
    }

    const Count2 = () => {
        setCount2(count2 + 1);
    }

    const Count3 = () => {
        setCount3(count3 + 1);
    }

    const Count4 = () => {
        setCount4(count4 + 1);
    }

    const Minus_Count = () => {    
        setMinusCount(minus_count - 1);
    }

    const Minus_Count2 = () => {
        setMinusCount2(minus_count2 - 1);
    }

    const Minus_Count3 = () => {
        setMinusCount3(minus_count3 - 1);
    }

    const Minus_Count4 = () => {
        setMinusCount4(minus_count4 - 1);
    }

    const [minus_count, setMinusCount] = useState(0);
    const [minus_count2, setMinusCount2] = useState(0);
    const [minus_count3, setMinusCount3] = useState(0);
    const [minus_count4, setMinusCount4] = useState(0);
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

    const Warning = styled.div`
        font-size: 30px;
        font-weight: bold;
        display:flex;
        align-items: center;
        justify-content: center;
        height: 100px;
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
        &:hover {
            background-color: lightyellow;
        }
    `;

    const BbabbicoBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 5.2em;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const TankboygreengrapeBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3.6rem;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const TankboyBox = styled.button`
        background-color: white;
        border-width: 1px;
        position: relative;
        right: 3rem;
        &:hover {
            background-color: lightyellow;
        }
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

    const MinusDivButton = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        left: 28px;
    `;

    const FirstButton = styled.button`
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

    const SecondButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 38px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const ThirdButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 249px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const FourthButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: green;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 530px;
        &:hover {
            background-color: lightyellow;
        }
    `;

    const FirstButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const SecondButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const ThirdButtonDiv = styled.div`
        color: white;
        font-size: 40px;
        display: flex;
        justify-content: center;
    `;

    const FourthButtonDiv = styled.div`
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

    const YogurtText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const BbabbicoText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const TankboygreengrapeText = styled.div`
        font-size: 30px;
        position: relative;
        top: 40px;
    `;

    const TankboyText = styled.div`
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
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Warning>주의 : 수량이 0보다 크도록 선택하세요. 아니면 주문에 실패합니다.</Warning>
            <Items>
                <YogurtBox onClick={() => {btn_first_click(); Count()}}><ImageBox_IcecreamTube image={Yogurt}/><YogurtPrice>3,500원</YogurtPrice></YogurtBox>
                <BbabbicoBox onClick={() => {btn_second_click(); Count2()}}><ImageBox_IcecreamTube image={Bbabbico}/><BbabbicoPrice>3,000원</BbabbicoPrice></BbabbicoBox>
                <TankboygreengrapeBox onClick={() => {btn_third_click(); Count3()}}><ImageBox_IcecreamTube image={Tankboygreengrape}/><TankboygreengrapePrice>3,500원</TankboygreengrapePrice></TankboygreengrapeBox>
                <TankboyBox onClick={() => {btn_fourth_click(); Count4()}}><ImageBox_IcecreamTube image={Tankboy}/><TankboyPrice>3,000원</TankboyPrice></TankboyBox>
            </Items>
            <MinusDivButton>
                <FirstButton onClick={() => {btn_first_minus_click(); Minus_Count();}}><FirstButtonDiv>-</FirstButtonDiv></FirstButton>
                <SecondButton onClick={() => {btn_second_minus_click(); Minus_Count2();}}><SecondButtonDiv>-</SecondButtonDiv></SecondButton>
                <ThirdButton onClick={() => {btn_third_minus_click(); Minus_Count3();}}><ThirdButtonDiv>-</ThirdButtonDiv></ThirdButton>
                <FourthButton onClick={() => {btn_fourth_minus_click(); Minus_Count4();}}><FourthButtonDiv>-</FourthButtonDiv></FourthButton>
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
                   <YogurtText>요구르트 쭈쭈빠 : 3,500원 * {count+(minus_count)}개 = {3500*(count+(minus_count))}원</YogurtText>
                            <BbabbicoText>빠삐코 : 3,000원 * {count2+(minus_count2)}개 = {3000*(count2+(minus_count2))}원</BbabbicoText>
                            <TankboygreengrapeText>탱크보이 청포도 : 3,500원 * {count3+(minus_count3)}개 = {3500*(count3+(minus_count3))}원</TankboygreengrapeText>
                            <TankboyText>탱크보이 : 3,000원 * {count4+(minus_count4)}개 = {3000*(count4+(minus_count4))}원</TankboyText> <br />
                            <Total>총 금액 : {(3500*(count+(minus_count))
                            +(3000*(count2+(minus_count2)))
                            +(3500*(count3+(minus_count3)))
                            +(3000*(count4+(minus_count4))))}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}


export default Icecream_bar;