import './App.css';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from './Header'
// import Home from './Home'
// import Info from './Info'
// import Choice from './Choice'
import Testimonial from './Testimonial'
import Ad from './Ad'
import Ad2 from './Ad2'
import Footer from './Footer'
// import Finding from './Finding';
import How from './How';
import Login from './Login'
import Card from './Card'
import Landing from './Landing';
import Form from './Form';

function App() {
  // npm i redux react-redux @reduxjs/toolkit
const [final,setFinal]=useState(false)
  return (
    <div className="App bg-gray-50 flex flex-col items-center w-full">
          <Header/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Card' element={<Card/>}/>
            <Route path='/Form' element={<Form/>} final={final} setFinal={setFinal}/>


          </Routes> 

        {/* <Finding/> */}

        <How/>
        <Ad/>
        <Ad2/>
        <Testimonial/>
        <Footer/>
        
    </div>
  );
}

export default App;
