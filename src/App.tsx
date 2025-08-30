import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
//import Footer from "./components/";
import Landing_Page from "./components/Landing_Page";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header>
        <Routes>
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Landing_Page' element={<Landing_Page/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Skills' element={<Skills/>} />
        </Routes>
    </Header>

    </BrowserRouter>
    </>
  )
}

export default App
