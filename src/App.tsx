import React from 'react';
import Main from './pages/Main';
import { GlobalContainer, LaxicalContainer } from './component/index-component/styled_index';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import KioskMain from './pages/KioskMain';
import Icecream_main from './practice/Icecream/Icecream_main';
import Icecream_cone from './practice/Icecream/Icecream_cone';
import Icecream_bar from './practice/Icecream/Icecream_bar';
import Icecream_tube from './practice/Icecream/Icecream_tube';
import Icecream_family from './practice/Icecream/Icecream_family';
function App() {
  return (
        <Router>
        <GlobalContainer>
          <LaxicalContainer>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/kiosk' element={<KioskMain/>}/>
              <Route path='/kiosk/Icecream' element={<Icecream_main/>}/>
              <Route path='/kiosk/Icecream_cone' element={<Icecream_cone/>}/>
              <Route path='/kiosk/Icecream_bar' element={<Icecream_bar/>}/>
              <Route path='/kiosk/Icecream_tube' element={<Icecream_tube/>}/>
              <Route path='/kiosk/Icecream_family' element={<Icecream_family/>}/>
            </Routes>
          </LaxicalContainer>
        </GlobalContainer>
        </Router>
  );
}

export default App;
