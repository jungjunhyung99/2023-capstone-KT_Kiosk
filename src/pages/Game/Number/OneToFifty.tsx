import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";
import { Overlay } from "../../../component/game-component/balloon-component";
import { ModalCompleteButton, ModalNavBar, ModalResult, MovieExplain, TimeTakenDiv } from "../../../component/kiosk-component/styled_movie";
import AnimatedText from "../../../contents/AnimatedText";
import { useNavigate } from "react-router-dom";

let array : number[] = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = (num : number) => {
    if (num === current && gameFlag) {
      if (num === 25) {
        setModal(true);
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? 0 : 0,
        ...numbers.slice(index + 1)
      ]);
      setCurrent(current => current + 1);
    }
  };
  const startGame = () => {
    setNumbers(shuffleArray(array));
    setCurrent(1);
    setGameFlag(true);
  };
  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <Container>
    <Introduce>숫자게임</Introduce>
      <Board numbers={numbers} handleClick={handleClick}></Board>
      {gameFlag ? (
        <Timer />
      ) : (
        <StartButton onClick={startGame}>시작하기</StartButton>
      )}
      <Final>여백</Final><hr/>
      {modal ? 
        <>
        <Overlay/>
        <ModalResult>
            <ModalNavBar>
              숫자게임
            </ModalNavBar>
            <TimeTakenDiv>
              숫자게임 클리어!
            </TimeTakenDiv>
            <ModalCompleteButton onClick={() => navigate("/")}>홈으로 가기</ModalCompleteButton>
        </ModalResult>
         </>
          :
          null
          }    
    </Container>
  );
}

const shuffleArray = (array:number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Final = styled.div`
  height: 100px;
  font-size: 300px;
  background-color:black;
  height: 1000px;
  width: 305.2%;
  color: black;
`;

const Container = styled.div`
    width: 600px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3DB7CC;
`;

const Introduce = styled.div`
    font-size: 35px;
    font-weight: bold;
    margin-top: 470px;
`;

const StartButton = styled.button`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    margin-top: 150px;
    font-size: 35px;
    font-weight: bold;
    background-color: lightblue;
`;

export default OneToFifty;