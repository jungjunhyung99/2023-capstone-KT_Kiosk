import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16} from "../../Atom/store";
import { practiceMode2 } from '../../Atom/store';
import { css, keyframes } from "styled-components";

function Icecream() {
    const navigate = useNavigate();
    const modeRecoil = useRecoilValue(practiceMode2);

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
        navigate('/kiosk/Icecream_start');
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

    function PRINT() {
        return (<Main_Text>상단 메뉴를 선택해주세요.</Main_Text>);
    }

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
        width:27%;
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

    const fadeInOut = keyframes`
        0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
            border-width: 4px;
        }
        50%{
            border-color: red;
        }
        100% {
            border-color: black;
            box-shadow: 0 0 0 1.03rem rgba(255, 0, 0, 0);
        }
        `;
        
    const TubeButton = styled.div<{mode: boolean}>`
        font-size: 35px;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
        }
        width: 27%;
        ${(props) =>
            props.mode &&
            css`
                border: 4px dashed transparent;
                animation: ${fadeInOut} 2s infinite;
            `}
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

    const Main_Text = styled.div`
        font-size: 36px;
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
        font-size: 35px;
        font-weight: bold;
        position: relative;
        top: 0px;
        display: flex;
        justify-content: center;
        width: 80vw;
        height: 80px;
        align-items: center;
        background-color: #3DB7CC;
        &:hover {
            background-color: #FAF4C0;
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
                <TubeButton mode={modeRecoil.icecream} onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Introduce>{PRINT()}</Introduce>
            <Before onClick={onClickKiosk}>이전으로 돌아가기</Before> 
            <Final></Final>
        </div>
    );
}

export default Icecream;