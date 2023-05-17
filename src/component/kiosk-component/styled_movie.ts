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

export const AnimatedDiv = styled.div`
  border: 2px dashed transparent;
  animation: ${fadeInOut} 2s infinite;
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

export const AllButton = styled(Button)`
  border: 2px dashed transparent;
  animation: ${fadeInOut} 2s infinite;
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


export const MinusButton = styled.button<{num: number, current:number}>`
  font-size: 40px;
  width: 5vw;
  height: 5vh;
  border-radius: 20px;
  background-color: #666666;
  color: #ffffff;
  border:none;
  cursor: pointer;
  
  ${(props) =>
    props.num < props.current &&
    css`
      border-color: red;
      animation: ${fadeInOut} 2s infinite;
    `};
`;

export const PlusButton = styled.button<{num: number, current:number}>`
  font-size: 40px;
  width: 5vw;
  height: 5vh;
  border-radius: 20px;
  background-color: #666666;
  color: #ffffff;
  border:none;
  cursor: pointer;
  
       ${(props) =>
    props.num > props.current &&
    css`
      border-color: red;
      animation: ${fadeInOut} 2s infinite;
    `};
`;


export const SeatButton = styled.button<{isActive:boolean}>`
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
        props.isActive &&
        css`
        border-color: red;
        animation: ${fadeInOut} 2s infinite;
        `};
`;

export const TimelineDiv = styled.div<{idx: number}>`
    display:flex;
    justify-content:center;
    align-content:center;
    border: 2px dashed transparent;
    ${(props) => 
        props.idx === 1 &&
        css`
        border-color: red;
        animation: ${fadeInOut} 2s infinite;
      `};
`;