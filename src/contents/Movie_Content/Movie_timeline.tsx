import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import { IAtomMovie, movieObj, practiceMode } from "../../Atom/atom";
import { makeImagePath } from "../../Hook/Hook";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ModalCompleteButton, ModalNavBar, MovieExplain, TimeBox, TimelineDiv } from "../../component/kiosk-component/styled_movie";
import AnimatedText from "../AnimatedText";
import { Overlay } from "../../component/game-component/balloon-component";

const Container = styled(motion.div)`
  width: 50vw;
  height: 100%;
`;

const Button = styled.button`
    font-size: 25px;
    width: 30vw;
    padding: 7px 0;
    border-radius: 16px;
    background-color: #666666;
    color: #fff;
    letter-spacing: -1px;
    border: none;
    margin-top: 8vh;
`;


const Box = styled.div<{bgPhoto: string}>`
  display: flex;
  width: 8vw;
  height: 19vh;
  background-image:
  url(${(props) => props.bgPhoto});
  background-size: cover;
  margin: 10px;
`;

const Banner = styled.div<{bgPhoto: string}>`
top:0;
height: 18rem ;
width: 50vw;
display: flex;
background-image:
  url(${(props) => props.bgPhoto});
background-size: cover;
`;

const Footer = styled.div`
  display: flex;
  background-color:#454444;
  width: 100%;
  height: 9%;
`;

const BackButton = styled.button`
  font-size: 40px;
  color: white;
  font-weight: 800;
  background-color: #454444;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

const HomeButton = styled.button`
  font-size: 40px;
  color: white;
  font-weight: 800;
  background-color: #454444;
  border: none;
  margin-left: 10px;
`;

const when = 
  {
      time: ["11:40", "12:55","14:05","15:20","16:35"],
      seat: ["26/218", "26/218", "26/218", "26/218", "26/218"]
  };

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


interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

function Movie_timeline() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<IGetMoives>();
  const [movieRecoil, SetMovieRecoil] = useRecoilState<IAtomMovie>(movieObj);
  const modeRecoil = useRecoilValue(practiceMode);
  const [modalMatch, setModalMatch] = useState(true);
  const TimeClick = (timeline:string, index: number) => {
    SetMovieRecoil({title:movies?.results[index].title as string, seat:0,time:timeline});
    navigate("/kiosk/movie/seat");
  };
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

  return (
    <Container
    initial={{opacity: 0}}
        animate={{opacity: 1, transition:{
            duration: 0.5,
            delay: 0.2,
        }}}
        exit={{opacity: 0}}>
          <div style={{display:"flex",flexDirection:"column",color:"white",height:"100vh"}}>
            <Banner bgPhoto={makeImagePath(movies?.results[4].backdrop_path || "")}/>
            {movies?.results.slice(0,3).map((movie,index) => (
               <TimelineDiv mode={modeRecoil.movie}idx={index} key={index}>
              <Box bgPhoto={makeImagePath(movie?.poster_path)}>
              </Box>
              <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"block",left:"0",top:"0"}}>
                  <p style={{fontWeight:"500",fontSize:"20px"}}>{movie.title}</p>
                </div>
                <div style={{display:"flex", flexWrap:"wrap",transform:"translateY(-15%)"}}>
                  {when.time.map((time,index2:number) => 
                  <TimeBox 
                  key={index + 30}
                  onClick={() => TimeClick(time,index)}>
                    <p>
                    {when.time[index2]}
                    <br/>
                    {when.seat[index2]}
                    </p>
                    </TimeBox>)}
                </div>
              </div>
              </TimelineDiv>
              ))}
              {modeRecoil.movie && modalMatch ? 
              <>
              <Overlay/>
              <MovieExplain>
                <ModalNavBar>
                  키오스크 지도
                </ModalNavBar>
                <AnimatedText text="화 면에 빨간색으로 빛나는 부분 중에서 시간을 선택해주세요!"/>
                <ModalCompleteButton onClick={() => setModalMatch(false)}>확인하기</ModalCompleteButton>
              </MovieExplain>
              </>
              :
              null
              }
          <Footer>
            <BackButton onClick={()=>navigate(-1)}>←</BackButton>
            <HomeButton></HomeButton>
          </Footer>
          </div>
        </Container>   
  );
}

export default Movie_timeline;