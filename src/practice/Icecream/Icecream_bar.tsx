import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamBar } from '../../component/kiosk-component/styled_kiosk';
import merona from "../../images/icecream/merona.png";
import subakba from "../../images/icecream/subakba.png";
import zyosba from "../../images/icecream/zyosba.png";
import bosukba from "../../images/icecream/bosukba.png";
import { useState, useCallback } from 'react';
import Modal from "../../component/Modal";

function Icecream_bar() {

    const navigate = useNavigate();

    const onClickIcecreamCone = () => {
        navigate('/Icecream_cone');
    }

    const onClickIcecreamTube = () => {
        navigate('/Icecream_tube');
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

    const MinusDivButton = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        left: 60px;
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
        right: 70px;
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
        left: 183px;
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
        left: 430px;
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
            <Warning>주의 : 수량이 0보다 크도록 선택하세요. 아니면 주문에 실패합니다.</Warning>
            <Items>
                <MeronaBox onClick={() => {btn_first_click(); Count()}}><ImageBox_IcecreamBar image={merona}/><MeronaPrice>2,500원</MeronaPrice></MeronaBox>
                <SubakbaBox onClick={() => {btn_second_click(); Count2()}}><ImageBox_IcecreamBar image={subakba}/><SubakbaPrice>2,000원</SubakbaPrice></SubakbaBox>
                <BosukbaBox onClick={() => {btn_third_click(); Count3()}}><ImageBox_IcecreamBar image={bosukba}/><BosukbaPrice>2,500원</BosukbaPrice></BosukbaBox>
                <ZyosbaBox onClick={() => {btn_fourth_click(); Count4()}}><ImageBox_IcecreamBar image={zyosba}/><ZyosbaPrice>2,000원</ZyosbaPrice></ZyosbaBox>
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
                   <MeronaText>메로나 : 2,500원 * {count+(minus_count)}개 = {2500*(count+(minus_count))}원</MeronaText>
                            <SubakText>수박바 : 2,000원 * {count2+(minus_count2)}개 = {2000*(count2+(minus_count2))}원</SubakText>
                            <BosukText>보석바 : 2,500원 * {count3+(minus_count3)}개 = {2500*(count3+(minus_count3))}원</BosukText>
                            <ZyosText>죠스바 : 2,000원 * {count4+(minus_count4)}개 = {2000*(count4+(minus_count4))}원</ZyosText> <br />
                            <Total>총 금액 : {(2500*(count+(minus_count))
                            +(2000*(count2+(minus_count2)))
                            +(2500*(count3+(minus_count3)))
                            +(2000*(count4+(minus_count4))))}원</Total>
                            <Close onClick={() => setOpenModal(false)}>닫기</Close>
                </Modal>
            )}
        </div>
    );
}


export default Icecream_bar;