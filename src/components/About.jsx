import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Menu from "./Menu";


const About = () => {

  // use props for something here

  return (
    <>


      <Menu currentPage="about" />


    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 24px;
`

const MyText = styled.div`
  font-family: "Vollkorn";
  font-size: 14px;
  text-decoration: none;
`

export default About
