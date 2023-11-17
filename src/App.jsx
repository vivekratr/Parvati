import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './components/Mainpage'
import './App.css'
import Figma1 from './components/Figma1';
import Figma2 from './components/Figma2';
import Corousell from './components/Corousell';
import Modal from './components/Modal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div className='m-0 p-0'>
  

        <Routes>
          <Route path="/" element={<Mainpage /*state = {state}*/ />} />
          <Route path="/fig" element={<Figma1 /*state = {state}*/ />} />
          <Route path="/fig1" element={<Figma2 /*state = {state}*/ />} />
          <Route path="/cor" element={<Corousell /*state = {state}*/ />} />
          <Route path="/mod" element={<Modal /*state = {state}*/ />} />

          
        </Routes>
      
     
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
