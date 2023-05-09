import { motion } from "framer-motion";
import styled from "styled-components";

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