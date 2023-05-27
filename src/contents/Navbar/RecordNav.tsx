import { useNavigate } from "react-router-dom";
import { NavBar, NextButton, PrevButton, RecordNavBar } from "../../component/kiosk-component/styled_kiosk";

function RecordNav() {
    const navigate = useNavigate();
    return(
        <RecordNavBar> 
            <PrevButton onClick={() => navigate(-1)}>이전 화면으로</PrevButton>
            <NextButton onClick={() => navigate("/")}>처음 화면으로</NextButton>
        </RecordNavBar>
    );
}

export default RecordNav;