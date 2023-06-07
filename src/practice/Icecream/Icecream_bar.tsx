import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageBox_IcecreamBar } from '../../component/kiosk-component/styled_icecream';
import merona from "../../images/icecream/merona.png";
import subakba from "../../images/icecream/subakba.png";
import zyosba from "../../images/icecream/zyosba.png";
import bosukba from "../../images/icecream/bosukba.png";
import { useState, useCallback } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Modal_Result from "../../component/Modal";
import Modal_Result2 from "../../component/Modal2";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16, icecreamTime, practiceMode2} from "../../Atom/store";
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { dbService } from '../../Hook/Hook';

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
    
    const onClickHome = () => {
        navigate('/kiosk/Icecream');
    }
    
    const [bar_number1, setNumber5] = useRecoilState(number5);
    const [bar_number2, setNumber6] = useRecoilState(number6);
    const [bar_number3, setNumber7] = useRecoilState(number7);
    const [bar_number4, setNumber8] = useRecoilState(number8);

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
    const [isOpenModal2, setOpenModal2] = useState<boolean>(false);
    const timer = useRecoilValue(icecreamTime);
    const [modeRecoil,setModeRecoil] = useRecoilState(practiceMode2);

    const updateData = async (time: number) => {
        try {
          const docId = "c5EkUB47lyWaKnU36b5c";
          const docRef = doc(dbService, 'kiosk-record', docId); 
      
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          console.log(data);
  
          await updateDoc(docRef, {
            "data.icecream.time": arrayUnion(parseInt(((time) / 1000).toFixed(0)))
          });
          console.log('문서 업데이트 완료');
        } catch (error) {
          console.error('문서 업데이트 중 오류 발생:', error);
        }
      };

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);

        const endTime = Date.now();
          if(modeRecoil.icecream){
            updateData(endTime - timer);
          }   
          
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

    const SecondPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        right: 70px;
        &:hover {
            background-color: #FAF4C0;
        }
        z-index: 100;
    `;

    const ThirdPlusButton = styled.button`
        width: 60px;
        height: 50px;
        background-color: #22741C;
        border-width: 1px;
        position: relative;
        top: 10px;
        left: 183px;
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
        left: 436px;
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
        right: 180px;
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
        right: 70px;
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
        left: 183px;
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
        left: 436px;
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

    const Order = styled.button`
        width: 80vw;
        font-size: 35px;
        background-color: #3DB7CC;
        border-width: 1px;
        height: 100px;
        font-color: white;
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
                <Modal_Result onClickToggleModal={onClickToggleModal}>
                    {RESULT_PRINT()}<br></br>
                    {ANSWER_PRINT()}<br></br>
                    <Two_Button>
                        <Home_Button onClick={onClickHome}>홈으로 이동</Home_Button>  
                        <Result onClick={onClickToggleModal}>결제하기</Result>   
                            {isOpenModal2 && (
                                <Modal_Result2 onClickToggleModal2={onClickToggleModal}><LookResult>결제 및 기록</LookResult><br/>
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
                                        + 3500*family_number1 + 3500*family_number2 + 4000*family_number3 + 3500*family_number4}원
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

export default Icecream_bar;