import styled from "styled-components";
import {useEffect, useState} from "react";
import { makeImagePath } from "../../Hook/Hook";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IAtomMovie, IGetMoives, movieObj } from "../../Atom/atom";
import { title } from "process";
import { motion } from "framer-motion";
import GameNav from "../Navbar/GameNav";
import { ImageBox } from "../../component/kiosk-component/styled_kiosk";
import star from "../../images/star.svg";
import { AllButton, Button } from "../../component/kiosk-component/styled_movie";

const Container = styled(motion.div)`
  width: 50vw;
  height: 100vh;
  background-color: #212121;
  overflow: scroll;
`;


const Box = styled.div<{bgPhoto: string}>`
  display: flex;
  width: 13vw;
  height: 33vh;
  background-image:
  url(${(props) => props.bgPhoto});
  background-size: cover;
  margin: 10px;
  cursor: pointer;
`;

const Banner = styled.div<{bgPhoto: string}>`
height: 18rem;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: center;
background-image:
  url(${(props) => props.bgPhoto});
background-size: cover;
`;

const PosterImage=styled.img`
    width : 13.5rem;
    height : 20rem;
    padding : 1rem;
`;

function Movie_fast(){
    const navigate = useNavigate();
    const [movies, setMovies] = useState<IGetMoives>();
    const [movieRecoil, setMovieRecoil] = useRecoilState<IAtomMovie>(movieObj);
    const BoxClicked = (MovieTitle: string) => {
      setMovieRecoil({title:MovieTitle, seat:0, time:""});
      navigate("/kiosk/movie/timeline");
    };

    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_KEY}`
        )
      ).json();
      if(json){
        setMovies(json);
    }
    };
    useEffect(() => {
      getMovies();
    }, []);
    console.log(movies);
    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Container
          initial={{opacity: 0}}
              animate={{opacity: 1, transition:{
                  duration: 0.5,
                  delay: 0.2,
              }}}
              exit={{opacity: 0}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Banner bgPhoto={makeImagePath(movies?.results[4].backdrop_path || "")}/>
              <div>
                <h2 style={{color:"#666666", display:"flex",justifyContent:"center"}}>가장 빨리 볼 수 있는 영화</h2>
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
                {movies?.results.slice(0,3).map((movie,index:number) => (
                  <div key={index} style={{display:"flex",color:"white",justifyContent:"center",flexDirection:"column",margin:"5px"}}>
                    <Box onClick={() => BoxClicked(movie.title)} bgPhoto={makeImagePath(movie?.poster_path)}>
                    </Box>
                    <div style={{display:"flex",borderTop:"1px solid #666666",fontSize:"20px",height:"5rem", justifyContent:"center",alignItems:"center"}}>
                      {movie.title}
                    </div>
                    <div style={{display:"flex",fontSize:"15px", borderTop:"1px solid #666666",justifyContent:"center"}}>
                     <ImageBox image={star}/><span style={{fontSize:"23px"}}>{movie.vote_average}
                      </span></div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{width:"100%",display:"flex", justifyContent:"center",gap:"5rem"}}>
              <Button onClick={() => navigate("/")}>홈으로 가기</Button>
              <AllButton onClick={() => navigate("/kiosk/movie/timeline")}>전체 상영표 보기</AllButton>
            </div>
          </Container>
        </div>
    );
}

export default Movie_fast;