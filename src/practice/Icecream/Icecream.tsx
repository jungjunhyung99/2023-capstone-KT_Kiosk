import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Icecream_main() {
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
    return(
        <div>
            <Title>Icecream</Title>
            <List>
                <ConeButton onClick={onClickIcecreamCone}>Cone</ConeButton>
                <BarButton onClick={onClickIcecreamBar}>Bar</BarButton>
                <TubeButton onClick={onClickIcecreamTube}>Tube</TubeButton>
                <FamilyButton onClick={onClickIcecreamFamily}>Family</FamilyButton>
            </List>
            <Introduce>상단 메뉴를 선택해주세요.</Introduce>
            <Before onClick={onClickKiosk}>
                이전으로 돌아가기
            </Before> 
        </div>
    );
}

export default Icecream_main;