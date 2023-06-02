import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16} from "../../Atom/store";

function Icecream() {
    const navigate = useNavigate();
    
    const onClickIcecreamCone = () => {
        navigate('/kiosk/Icecream_cone');
    }

    const onClickIcecreamBar = () => {
        navigate('/kiosk/Icecream_bar');
    }

    const onClickIcecreamTube = () => {
        navigate('/kiosk/Icecream_tube');
    }

    const onClickIcecreamFamily = () => {
        navigate('/kiosk/Icecream_family');
    }

    const onClickKiosk = () => {
        navigate('/kiosk');
    }

    const cone_number1 = useRecoilValue(number1);
    const cone_number2 = useRecoilValue(number2);
    const cone_number3 = useRecoilValue(number3);
    const cone_number4 = useRecoilValue(number4);

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

    function CONE1() {
        if (cone_number1 > 0) 
        {return "구구콘 : " + 1800 + "원 * " + cone_number1 + "개 = " + 1800*cone_number1 + "원";}
        else if (cone_number1 <= 0)
        {return;}
    }

    function QUESTION_PRINT() {
        return "위의 Tube에 있는 " + "빠삐코" + " 아이스크림을 " + "3" + "개 골라주세요.";
    }

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

    const Introduce = styled.div`
        font-size: 30px;
        font-weight: bold;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        background-color: white;
    `;  

    const Before = styled.button`
        font-size: 30px;
        font-weight: bold;
        position: relative;
        top: 0px;
        display: flex;
        justify-content: center;
        width: 80vw;
        height: 80px;
        align-items: center;
        background-color: #FFCC99;
        &:hover {
            background-color: lightyellow;
        }
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
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Introduce>{QUESTION_PRINT()}</Introduce>
            <Before onClick={onClickKiosk}>이전으로 돌아가기</Before> 
            <Final></Final>
        </div>
    );
}

export default Icecream;