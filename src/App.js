import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from './About';
import { Home } from './Home';
import { Services } from './Services';

function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;