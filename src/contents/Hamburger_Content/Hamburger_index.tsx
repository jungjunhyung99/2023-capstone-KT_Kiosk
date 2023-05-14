import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:40rem;
  height:100vh;
  background-color: #FF1F41;
  color:white;
`;

const Banner = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:85%;
`;

const Button = styled.div`
    display: block;
    background-color: #00B01F;
    height:15%;
    font-size:50px;
    &:hover{
        background-color: #027317;
        transition: all ease 0.6s 0s;
    }
`;

const Bottom = styled.div`
    display: block;
    margin-top: 30px;
    cursor: pointer;
    
`;

function Hamburger_main(){
    let navigate = useNavigate();
   return(
    <Container>
        <Banner>
            <h4 style={{fontSize:"40px"}}>더 빠르고 쉬워진</h4>
            <h1 style={{fontSize:"120px",transform:`translateY(-30%)`,textAlign:"center"}}>order & pay here</h1>
        </Banner>
        <Button onClick={() => navigate("/kiosk/hamburger")}>
            <div style={{display:"block",marginTop:"30px", cursor:"pointer",textAlign:"center"}}>
            여기를 클릭해 주세요!
            </div>
        </Button>
    </Container>
   );
}

export default Hamburger_main;