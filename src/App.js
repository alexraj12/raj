
import React from 'react';
import './App.css';
import './log.css';
import Home from './Home';
import About from './About';
import Photo from './Photo';
import Gallery from './Gallery';
import Getquote from './Getquote';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
<BrowserRouter>

 <Routes>
  <Route path ='/' element={<Photo/>}/>
  <Route path ='/home' element={<Home/>}/>
  <Route path ='/about' element={<About/>}/>
  <Route path ='/Getquote' element={<Getquote/>}/>
  <Route path ='/Gallery' element={<Gallery/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
