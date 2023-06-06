import { useNavigate } from "react-router-dom";
import { NavBar, NextButton, PrevButton } from "../../component/kiosk-component/styled_kiosk";

function Kiosk_Nav() {
    const navigate = useNavigate();
    return(
        <NavBar> 
            <PrevButton onClick={() => navigate(-1)}>이전 화면으로</PrevButton>
            <NextButton onClick={() => navigate("/")}>처음 화면으로</NextButton>
        </NavBar>
    );
}

export default Kiosk_Nav;