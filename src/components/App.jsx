import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Homepage from "./Homepage";
import { useContext } from 'react';


function App() {

  // use props for something here
  return (
    <>
{/* 
      <MyHeader>App!</MyHeader>

      <Link to="/about">About!</Link>
      <Link to="/projects">Projects!</Link>
      <Link to="/contact">Contact!</Link>
      <Link to="/">Back home!</Link> */}

      {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter> */}

    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 24px;
`

export default App
