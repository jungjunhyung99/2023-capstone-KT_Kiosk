import { motion } from "framer-motion";
import styled, {css, keyframes } from "styled-components";

export const fadeInOut = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 1.7rem rgba(255, 0, 0, 0);
  }
`;

export const menuFadeInOut = keyframes`
  0% {
    box-shadow:  3px 3px 3px 3px rgba(38, 38, 69, 0.3);
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
  100% {
    border-color: transparent;
    box-shadow:  3px 3px 3px 3px rgba(38, 38, 69, 0.3);
  }
`;

export const MovieChoiceDiv = styled.div<{bgimage: any}>`
    width: 20rem;
    height: 20rem;
    background-image: url(${(props) => props.bgimage});
    background-size: cover;
    border-radius: 1rem;
`;

export const MovieContentDiv = styled.div`
    display: flex;
    background-color: #353535;
    width: 100%;
`;
export const MovieGuideDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    padding: 2.5rem;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export const ClockDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    color: white;
    margin: 2rem 0;
    align-items: center;
`

export const MovieLocDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DayDiv = styled.div`
    font-size: 1rem;
    padding: 2rem 3rem 0rem 3rem;
    color: white;
`;


export const AnimatedDiv = styled.div<{ mode: boolean }>`
  ${props =>
    props.mode &&
    css`
      border: 2px dashed transparent;
      animation: ${fadeInOut} 2s infinite;
    `}
`;

export const Button = styled.button`
    font-size: 25px;
    width: 20rem;
    padding: 7px 0;
    border-radius: 16px;
    background-color: #666666;
    color: #fff;
    letter-spacing: -1px;
    border: none;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export const AllButton = styled(Button)<{mode: boolean}>`
  ${props =>
    props.mode &&
    css`
      border: 2px dashed transparent;
      animation: ${fadeInOut} 2s infinite;
    `}
`;

export const TimeBox = styled.div`
  display:flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 5px;
  justify-content: center;
  border: 1px solid #666666;
  width: 9vw;
  height: 6vh;
  cursor: pointer;
  &:hover{
    background-color: #666666;
  }
`;


export const MinusButton = styled.button<{num: number, current:number, mode: boolean}>`
  font-size: 40px;
  width: 5vw;
  height: 5vh;
  border-radius: 20px;
  background-color: #666666;
  color: #ffffff;
  border: 3px dashed transparent;
  cursor: pointer;
  
  ${(props) =>
    props.num < props.current && props.mode &&
    css`
      border-color: red;
      animation: ${fadeInOut} 2s infinite;
    `};
`;

export const PlusButton = styled.button<{num: number, current:number, mode: boolean}>`
  font-size: 40px;
  width: 5vw;
  height: 5vh;
  border-radius: 20px;
  background-color: #666666;
  color: #ffffff;
  border: 3px dashed transparent;
  cursor: pointer;
  
       ${(props) =>
    props.num > props.current && props.mode &&
    css`
      border-color: red;
      animation: ${fadeInOut} 2s infinite;
    `};
`;


export const SeatButton = styled.button<{isActive:boolean, mode: boolean}>`
    font-size: 25px;
    width: 30vw;
    padding: 7px 0;
    border-radius: 16px;
    background-color: ${(props) => props.isActive ? "#fc5858" : "#666666"};
    color: #fff;
    letter-spacing: -1px;
    border: none;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 2px dashed transparent;
    cursor: ${(props) => props.isActive ? "pointer" :"default"};

        ${(props) => 
        props.isActive && props.mode &&
        css`
        border-color: red;
        animation: ${fadeInOut} 2s infinite;
        `};
`;

export const TimelineDiv = styled.div<{idx: number, mode: boolean}>`
    display:flex;
    justify-content:center;
    align-content:center;
    border: 2px dashed transparent;
    ${(props) => 
        props.idx === 1 && props.mode && 
        css`
        border-color: red;
        animation: ${fadeInOut} 2s infinite;
      `};
`;

export const MovieResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: black;
  border-radius: 1rem;
  top: 25rem;
`;

export const TakenMovieTime = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

export const BackButton = styled.div`
  width: 7rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: white;
  color: black;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResultNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoHomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 15rem;
  height: 4rem;
  border-radius: 2rem;
  border: none;
  background-color: #B0292F;
  color: white;
`;

export const MovieButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  width: 70%;
  cursor: pointer;  
`;

const Overlay = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
opacity: 0;
`;

export const MovieExplain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 40rem;
  top: 20rem;
  width: 30rem;
  height: 30rem;
  background-color: white;
  border-radius: 2rem;
  border: 2px solid black;
`;

export const ModalResult = styled(MovieExplain)`
  left: 42rem;
  top: 15rem;
`;

export const ModalNavBar = styled.div`
  display: flex;
  position: relative;
  top:0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  font-size: 2.5rem;
  color: white;
  background-color: #2BB7B3;
  font-weight: 800;
  margin-bottom: 5rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

export const ModalCompleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #FF7A00;
  width: 15rem;
  font-size: 2rem;
  height: 3rem;
  margin-top: 4rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export const TimeTakenDiv = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: black;
`;