import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IAtomMovie, IMovieAnswer, movieAnswer, movieObj, movieTime } from "../../Atom/atom";
import { makeImagePath } from "../../Hook/Hook"
import { GoHomeButton, MovieButtonDiv } from "../../component/kiosk-component/styled_movie";
import { useNavigate } from "react-router-dom";


const Container = styled(motion.div)`
  width: 50vw;
  height: 110vh;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2BB7B3;
    width: 5vw;
    height: 8vh;
    border: 2px solid white;
    cursor: pointer;
`;

const TimeBox = styled.div`
  display:flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 5px;
  justify-content: center;
  border: 1px solid #666666;
  background-color: #666666;
  width: 13vw;
  height: 8vh;
  cursor: pointer;
  font-size: 2em;
  color: white;
`;

const Box = styled.div<{bgPhoto: string}>`
  display: flex;
  width: 15vw;
  height: 25vh;
  background-image:
  url(${(props) => props.bgPhoto});
  background-size: cover;
  margin: 10px;
`;

const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 30vh;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Banner = styled.div<{bgPhoto: string}>`
height: 35vh;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: center;
background-image:
  url(${(props) => props.bgPhoto});
background-size: cover;
`;


interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  }

interface IGetMoives{
    dates:{
      maximum: string;
      minimum: string;
    }
    page: number;
    results: IMovie[];
    total_page: number;
    total_results: number;
  }

function Movie_result() {
    const navigate = useNavigate();
    const result = useRecoilValue<IAtomMovie>(movieObj);
    const [movies, setMovies] = useState<IGetMoives>();
    const takenTime = useRecoilValue(movieTime);
    const [answerRecoil, setAnswerRecoil] = useRecoilState<IMovieAnswer>(movieAnswer);
    const getMovies = async () => {
        const json = await (
          await fetch(
              `https://api.themoviedb.org/3/movie/now_playing?api_key=1e1dd98e7bbdb858a49359dbec86444f`
          )
          
        ).json();
        setMovies(json);
      };
      
    useEffect(() => {
        getMovies();
      }, []);

      console.log(result, answerRecoil);

    return (
        <Container
        initial={{opacity: 0}}
            animate={{opacity: 1, transition:{
                duration: 0.5,
                delay: 0.2,
            }}}
            exit={{opacity: 0}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
             <Banner bgPhoto={makeImagePath(movies?.results[1].backdrop_path || "")}/>
             <div style={{display: "flex",alignItems:"center",justifyContent:"center",width: "100%"}}>
             <h1 style={{marginTop:"2em",color:"white"}}>주문 완료까지 {takenTime.toFixed(0)}초 걸리셨습니다.</h1>
             </div>
             <div style={{display:"flex", alignItems:"center"}}>
                
                <SubBox>
                  <Box bgPhoto={makeImagePath(movies?.results[answerRecoil.num].poster_path || "")}></Box>
                  <div>
                    {result.title != answerRecoil.title ? 
                      <div><span style={{fontSize:"1.2em",color:"#f96363"}}>{answerRecoil.title}을 선택 해주세요!</span></div>
                      : <div><span style={{fontSize:"1.2em",color:"#2BB7B3"}}>영화제목 선택 성공!</span></div>}
                    </div>
                  </SubBox>
                
                <SubBox>
                    <TimeBox>{answerRecoil.time}</TimeBox>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      {result.time != answerRecoil.time ? 
                      <div><span style={{fontSize:"1.2em",color:"#f96363"}}>를 선택 안하셨네요!</span></div>
                      : <div><span style={{fontSize:"1.2em",color:"#2BB7B3"}}>시간 선택 성공!</span></div>}
                    </div>
                </SubBox>
                <hr/>

                <SubBox>
                    <Item>B11</Item>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    {result.seat !== answerRecoil.seat ? <div><span style={{fontSize:"1.2em",alignItems:"center",color:"#f96363"}}><tr/> x {answerRecoil.seat} 개의 좌석을 선택 안하셨네요!</span></div>
                    : <div><span style={{fontSize:"1.2em",bottom:"0",color:"#2BB7B3"}}>좌석 선택 성공!</span></div>}
                    </div>
                  </SubBox>
                </div>
                <MovieButtonDiv>
                  <GoHomeButton onClick={() => navigate("/")}>
                    홈으로 가기
                  </GoHomeButton>
                  <GoHomeButton onClick={() => navigate("/login")}>
                    기록 확인 하기
                  </GoHomeButton>
                </MovieButtonDiv>
                
            </div>
        </Container>
    );
}

export default Movie_result;