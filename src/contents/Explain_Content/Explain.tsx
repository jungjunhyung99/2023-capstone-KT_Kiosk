import { useNavigate } from "react-router-dom";
import { ExplainBackButton, ExplainContainer, ExplainLogoDiv, ExplainNavBar } from "../../component/kiosk-component/styled_explain";
import { KTLogo2 } from "../../component/kiosk-component/styled_kiosk";
function Explain(){
    const navigate = useNavigate();

    return(
        <ExplainContainer>
            <iframe width="600" height="1050" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/61ecff4a-bde4-4fe2-90fa-1b634e527d2b">
            </iframe>
            <ExplainNavBar>
                <ExplainLogoDiv>
                    <KTLogo2/>
                    키오스크 설명서
                </ExplainLogoDiv>
                <ExplainBackButton onClick={() => navigate(-1)}>
                    뒤로<br/>가기
                </ExplainBackButton>
            </ExplainNavBar>
        </ExplainContainer>
    );
}

export default Explain;