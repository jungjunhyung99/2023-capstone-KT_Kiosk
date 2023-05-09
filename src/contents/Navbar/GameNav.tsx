import { useNavigate } from "react-router-dom";
import { NextButton, PrevButton } from "../../component/kiosk-component/styled_kiosk";
import { GameNavBar } from "../../component/game-component/balloon-component";

function GameNav() {
    const navigate = useNavigate();
    return(
        <GameNavBar> 
            <PrevButton onClick={() => navigate(-1)}>이전 화면으로</PrevButton>
            <NextButton onClick={() => navigate("/")}>처음 화면으로</NextButton>
        </GameNavBar>
    );
}

export default GameNav;