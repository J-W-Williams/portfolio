import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {

  // use props for something here

  return (
    <>

      <MyHeader>My Projects!</MyHeader>
      <Link to="/about">About!</Link>
      <Link to="/projects">Projects!</Link>
      <Link to="/contact">Contact!</Link>
      <Link to="/">Back home!</Link>

    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 24px;
`

export default App
