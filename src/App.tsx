import React from 'react';
import Main from './contents/Main_Content/Main';
import { GlobalContainer, GlobalKioskDiv, LaxicalContainer } from './component/index-component/styled_index';
import {BrowserRouter as Router,Routes, Route, useMatch} from "react-router-dom";
import Hamburger_index from './contents/Hamburger_Content/Hamburger_index';
import MainPage from './pages/Main/MainPage';
import KioskPage from './pages/Main/KioskPage';
import { RecoilRoot } from 'recoil';
import GamePage from './pages/Main/GamePage';
import Game from './pages/Game/Game';
import CafePage from './pages/Cafe/CafePage';
import MoviePage from './pages/Movie/MoviePage';
import Movie_fast from './contents/Movie_Content/Movie_fast';
import Movie_timeline from './contents/Movie_Content/Movie_timeline';
import Movie_seat from './contents/Movie_Content/Movie_seat';
import Hamburger_take from './contents/Hamburger_Content/Hamburger_take';
import Hamburger_choice from './contents/Hamburger_Content/Hamburger_choice';
import Hamburger_last from './contents/Hamburger_Content/Hamuburger_last';
function App() {
  return (
      <RecoilRoot>
        <Router>
          <GlobalContainer>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/kiosk' element={<KioskPage/>}/>
                <Route path='/kiosk/hamburger' element={<Hamburger_index/>}/>
                <Route path='/kiosk/cafe' element={<CafePage/>}/>
                <Route path='/kiosk/movie' element={<MoviePage/>}/>
                <Route path='/kiosk/movie/fast' element={<Movie_fast/>}/>
                <Route path='/kiosk/movie/timeline' element={<Movie_timeline/>}/>
                <Route path='/kiosk/movie/seat' element={<Movie_seat/>}/>
                <Route path='/kiosk/Hamburger/take' element={<Hamburger_take/>}/>
                <Route path='/kiosk/Hamburger/choice' element={<Hamburger_choice/>}/>
                <Route path='/kiosk/Hamburger/last' element={<Hamburger_last/>}/>
                <Route path='/game' element={<GamePage/>}/>
                <Route path='/game/balloon' element={<Game/>}/>
              </Routes>
          </ GlobalContainer>
        </Router>
      </RecoilRoot>
  );
}

export default App;