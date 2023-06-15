import { motion } from "framer-motion";
import styled from "styled-components";
import door from "../../images/door.png";
import regame from "../../images/regame.png";

export const GameNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #2BB7B3;
    height: 10rem;
    width: 100%;
    border-radius: 0px 0px 100px 100px;
`;

export const Progress = styled.div`
    width: 30em;
    height: 1.5em;
    background-color: white;
    margin-top: 2em;
    @media screen and (max-width:700px){
      width: 20em;
    }
  `;
  
export const MiniBox = styled.div`
      display:flex;
      flex-direction: column;
      color: black;
      margin: 0 2rem;
  `;
  
export const Button = styled.div`
      background-image: url(${door});
      background-color: #3da8a5;
      background-size: cover;
      width: 8em;
      height: 8em;
      cursor: pointer;
      &:hover{
          opacity:2;
      }
  `;
  
export const Button2 = styled.div`
      background-image: url(${regame});
      background-color: #3da8a5;
      background-size: cover;
      width: 8em;
      height: 8em;
      cursor: pointer;
  `;
  
export const Dealt = styled.div<{ dealt :number }>`
    background-color: #f43b3b;
    width: ${(props) => props.dealt + "%"};
    height: 100%;
  `;
  
export const MainContainer = styled(motion.div)`
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
  `;
  
export const Row = styled(motion.div)`
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-template-rows: repeat(4,1fr);
      height: 100%;
      width: 80%;
      @media screen and (max-width: 700px){
        width:100%;
      }
  `;
  
export const Overlay = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw; // 수정 필요
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  `;
  
export const Box = styled(motion.div)<{bgphoto: string}>`
      background-image: url(${(props)=>props.bgphoto});
      background-size: cover;
      height: 7.5rem;
      width: 70%;
      font-size: 30px;
      background-size:cover;
      cursor: pointer;
      background-position: center center;
      margin: 0.5rem;
      @media screen and (max-width: 700px){
        width:70%;
        height:10vh;
        margin:5px;
      }
  `;
  
export const BigMovie = styled(motion.div)`
    width: 100%;
    height: 90vh;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 2px solid white;
    background-color: #2BB7B3;
    border:none;
    @media screen and (max-width: 700px){
      width: 80vw;
    }
  `;
  
export const ResultMovie = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: white;
    border: 2px solid white;
    overflow: hidden;
    background-color: #2BB7B3;
    @media screen and (max-width: 700px){
      width: 70vw;
      left:10%;
    }
  `;
  
  
export const BalloonButtonDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;

export const BalloonButton = styled.button`
  width: 100%;
  height: 7rem;
  background-color: #28A8A5;
  border-top: 2px solid gray;
  font-size: 2rem;
  font-weight: 700;
`;