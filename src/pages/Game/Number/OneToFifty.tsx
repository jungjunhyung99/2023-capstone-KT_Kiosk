import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";

let array : number[] = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const handleClick = (num : number) => {
    if (num === current && gameFlag) {
      if (num === 50) {
        alert("성공");
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
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
/*
const Final = styled.div`
  height: 100px;
  font-size: 300px;
  background-color:black;
  height: 1000px;
  width: 600px; 
  font-color: black;
`;
*/
const Container = styled.div`
    width: 600px;
    height: 1000px;
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
    margin-top: 120px;
`;

const StartButton = styled.button`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    margin-top: 230px;
    font-size: 35px;
    font-weight: bold;
    background-color: lightblue;
    align-items: center;
`;

export default OneToFifty;