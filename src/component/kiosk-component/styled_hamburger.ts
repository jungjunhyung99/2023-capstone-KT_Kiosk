import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

const fadeInOut = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 1.5rem rgba(255, 0, 0, 0);
  }
`;

const initFadeInOut = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(0, 161, 28, 0.7);
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 2rem rgba(0, 161, 28, 0);
  }
`;

export const HamburgerContainer = styled(motion.div)`
    display:flex;
    flex-direction: column;
    height:100%;
    background-color: #faf8f8;
`;

export const Body = styled.div`
    display:flex;
    height:100%;
`;

export const Navbar = styled.nav`
    display: flex;
    margin-right: 2em;
    flex-direction: column;
    height: 100%;
`;

export const NavButton = styled(motion.button)`
    border-radius: 3em;
    margin:10px;
    width:1.5em;
    height: 1.5em;
    font-size: 30px;
    border:none;
    background-color: #9e9b9b;
    color: white;
    cursor: pointer;
`;

export const MenuContainer = styled(motion.div)`
  display: flex;  
  flex-direction: column ;
  width:100%;
  align-items: center;
`;

export const Menu = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    height: 50%;
    @media screen and (max-width: 500px){
    grid-template-columns: repeat(1,1fr);
    }
`;

export const ItemBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width:14vw;
    height:13vh;
    margin: 15px;
    color:black;
    border: 2px solid black;
    cursor: pointer;
    box-shadow:  3px 3px 3px 3px rgba(38, 38, 69, 0.3);
    border: none;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:15%;
    color: black;
`;

export const ResultBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:99%;
    height:40px;
    border: 3px solid black;
`;

export const CountBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:200px;
    height: 60px;
    
`;

export const QuantityBox = styled(motion.div)`
    display:flex;
    flex-direction: column;
    position:absolute;
    align-items: center;
    background-color: white;
    left:12%;
    right:0;
    top:30%;
    bottom:0;
    width: 30vw;
    height: 20vh;
    box-shadow:  0 0 20px 20px #666666;
    border: none;
    z-index: 5;
    @media screen and (max-width: 1300px){
      height: 20em;
    }
`;

export const QuantityButton = styled(motion.button)`
    border-radius: 5px;
    font-size: 45px;
    width: 60px;
    height: 100%;
    border: none;
    background-color:#DFDDDD;
    cursor: pointer;
    
`;

export const NextButton = styled.button`
    width: 200px;
    height: 40px;
    background-color:#FF1F41;
    border: none;
    color: white;
    margin:10px;
    box-shadow:  0 2px 4px 0px #666666;
    cursor:pointer;
    &:hover{
        background-color: #ac0921;
        transition: all ease 0.5s 0s;
    }
`;

export const NextButton2 = styled.button`
    width: 300px;
    background-color: #666666;
    height: 40px;
    border: none;
    color: white;
    margin:10px;
    box-shadow:  0 2px 4px 0px #666666;
    cursor:pointer;
`;

export const NextButton3 = styled(NextButton)<{isActive:boolean}>`
    width: 300px;
    background-color: ${(props) => props.isActive ?  "FF1F41" : "#666666"};
    cursor:pointer;
`;

export const InitButton = styled.div<{mode: boolean}>`
    display: block;
    background-color: #00B01F;
    height:15%;
    font-size:50px;
    text-align: center;
    align-items: center;
    padding-top: 2rem;
    &:hover{
        background-color: #027317;
        transition: all ease 0.6s 0s;
    }
    border: ${(props) => props.mode ? "4px dashed white" : null};
    animation: ${(props) => props.mode ? `${initFadeInOut} 2s infinite` : null} ;
`;


export const TakeButton = styled.button<{answer: string, mode: boolean}>`
    width:13vw;
    height: 10vh;
    margin:20px;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    background-color: #FFFFFF;
    box-shadow:  3px 3px 6px 3px #2b2a2a;
    cursor: pointer;
    ${(props) =>
    props.answer === "포장주문" && props.mode &&
    css`
      border: 2px dashed transparent;
      animation: ${fadeInOut} 2s infinite;
    `};
`;

export const HallButton = styled.button<{answer: string, mode: boolean}>`
    width:13vw;
    height: 10vh;
    margin:20px;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    background-color: #FFFFFF;
    border: 5px dashed red;
    box-shadow:  3px 3px 6px 3px #2b2a2a;
    cursor: pointer;
    ${(props) =>
    props.answer !== "포장주문" && props.mode &&
    css`
      border-color: red;
      animation: ${fadeInOut} 2s infinite;
    `};
`;

export const DescribeDiv = styled.div`
    font-size: 2rem;
    color: white;
`;

export const KioskBorderDiv = styled.div`
    border: 3px solid #DEE3EA;
    background-color: white;
`;


export const StartButton = styled.div`
    display: flex;
    width: 80%;
    height: 10rem;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
    background-color: #4BE4DF;
    border: 3px solid black;
    border-radius: 2rem;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`;

export const MenuTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const MenuCost = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;

export const MenuCal = styled.div`
    color: #666666;
`;