import React from 'react';
import Main from './pages/Main';
import { GlobalContainer, LaxicalContainer } from './component/index-component/styled_index';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import KioskMain from './pages/KioskMain';
function App() {
  return (
        <Router>
        < GlobalContainer>
          <LaxicalContainer>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/kiosk' element={<KioskMain/>}/>
            </Routes>
          </LaxicalContainer>
        </ GlobalContainer>
        </Router>
  );
}

export default App;
