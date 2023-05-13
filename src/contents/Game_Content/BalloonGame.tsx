import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { balloon } from "./Balloon_data/data";
import pang from "../../images/pang.jpg";
import X from "../../images/X.png";
import { AnimatePresence } from "framer-motion";
import { BigMovie, Box, Button, Button2, Dealt, MainContainer, MiniBox, Overlay, Progress, ResultMovie, Row } from "../../component/game-component/balloon-component";
import Kiosk_Nav from "../Navbar/KioskNav";
import GameNav from "../Navbar/GameNav";

interface IBallon {
  img: string;
  name: string;    
}

const ballColor = {
  color: ["노란색","빨간색","초록색","파란색"],
};

function BallonGame() {
  
    const randColor = () => {
      if(selColor.length === 1) return;
      let colorIndex = Math.floor(Math.random()*ballColor.color.length);
      let colorIndex2 = Math.floor(Math.random()*ballColor.color.length);
      setColor([ballColor.color[colorIndex],ballColor.color[colorIndex2]]);
      return [ballColor.color[colorIndex],ballColor.color[colorIndex2]];
      };  
      const navigate = useNavigate();
      const [selColor, setColor] = useState<string[]>([]);
      const [score, setScore] = useState(0);
      const [fontColor,setFontColor] = useState<string[]>(["green","red"]);    
      const [realBall, setBall] = useState<IBallon[]>(balloon);
      const [count, setCount] = useState(20);
      const [num, setNum] = useState(0);
      useEffect(() => {
        const sec = 
        setInterval(() => {
          if(count === 0) {
            return;
          };
          setCount(count - 1);
          setNum(Math.floor((count / 20) * 100))
        },1000);
        return () => clearInterval(sec);
      },[count])
  
      const regameClicked = () => {
        setCount(20);
        setScore(0);
      };
  
      const changeFontColor = (colorIdx:string[]) => {
        if(selColor.length === 1) return;
        const color = ["yellow","red","green","blue"];
        let index = Math.floor(Math.random()*color.length);
        let index2 = Math.floor(Math.random()*color.length-1);
        setFontColor([color[index],color[index2]]);
        for(let i = 0; i < 2; i++){
        if(colorIdx[i] === "노란색" && index === 0){
          setFontColor([color.slice(1,4).at(index2) as string,...fontColor]);
        }
        else if(colorIdx[i] === "빨간색" && index === 1){
          setFontColor([[...color.slice(0,1), ...color.slice(2,4)].at(index2) as string, ...fontColor]);
        }
        else if(colorIdx[i] === "초록색" && index === 2){ 
          setFontColor([[...color.slice(0,2), ...color.slice(3)].at(index2) as string, ...fontColor]);
        }
        else if(colorIdx[i] === "파란색" && index === 3){
          setFontColor([color.slice(0,3).at(index2) as string,...fontColor]);
        }}
      };
  
      useEffect(() => {
        setBall(balloon);
        randColor();
        changeFontColor(selColor);
        suffle();
      },[selColor.length === 0]);
  
      const suffle = () => {
        realBall.sort(() => Math.random() - 0.5);
      };
  
      const changing = (ballName: string, index:number) => {
        const arr = selColor;
        let count = 0;
        let ballCatch = JSON.parse(JSON.stringify(realBall));
        for(let i = 0 ; i < selColor.length; i++){
          if(arr[i] === ballName){
            arr.splice(i,1);
            fontColor.splice(i,1);
            setScore((prev) => prev+1);
            ballCatch[index].img = pang;
            setBall(ballCatch);
          }
          else{
            if(selColor.length === 1){
              ballCatch[index].img = X;
          setBall(ballCatch);
          setScore((prev) => prev - 2);
          count = 0;
            }
            count++;  
          }
        }
        if(count ===2){
          ballCatch[index].img = X;
          setBall(ballCatch);
          setScore((prev) => prev - 2);
          count = 0;
        }
      };
  
      const init = (img : any) => {
        return img;
      };
      
        return (
          <AnimatePresence>
                <div style={{display:"flex", flexDirection:"column",height:"110vh",overflow:"auto"}}>
                  <GameNav/>
                  {count !== 0 ? 
                  <BigMovie
                  layoutId="movie"
                >
                  <MainContainer 
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition:{
                      duration: 1,
                      delay: 1,
                  }}}
                  exit={{opacity: 0}}>
                    <div style={{margin:"0 auto", display:"flex", flexDirection:"column"}}>
                      <h1 style={{margin: "0 auto",color:"white", fontSize:"90px", fontWeight:"800"}}>
                        {score}
                      </h1>
                      <h1 style={{margin: "0 auto", color: "white"}}>
                        score
                      </h1>
                    </div>
                    <div style={{display:"flex", justifyContent:"center",alignItems:"center", marginTop:"2rem", width:"25rem", height:"8rem", backgroundColor:"#3da8a5"}}>{selColor.map((colorIdx,index) => <h1 key={index} style={{margin:"15px",color:fontColor[index]}}>
                      {colorIdx}
                      </h1>)}
                    </div>
                    <Progress>
                      <Dealt dealt={num}/>
                     </Progress>
                    <Row>
                        {realBall.map((ball,index) => <Box
                        onClick={() => changing(ball.name,index)} 
                        bgphoto={init(ball.img)}
                        key={index}>
                        </Box>)}
                    </Row>
                  </MainContainer>  
                </BigMovie>
                  :
                  <ResultMovie
                   layoutId="movie">
                   <h2>당신의 점수는...</h2>
                   <h4><span style={{fontSize:"2em",color:"red",fontWeight:"800"}}>{score}</span>점 입니다.</h4>
               <div style={{margin:"0 auto" ,display:"flex", justifyContent:"space-between",width: "100%"}}>
               <MiniBox>
                   <Button2 onClick={regameClicked}/>
                   <h3>다시시작</h3>
               </MiniBox>
               <MiniBox>
                   <Button onClick={() => navigate("/Menu/home/hard")}/>
                   <h3>나가기</h3>
               </MiniBox>
               </div>
                     </ResultMovie>
                    }
                </div>
            </AnimatePresence>
      );
  }
  
  export default BallonGame;