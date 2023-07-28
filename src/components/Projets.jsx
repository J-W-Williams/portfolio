import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'

const Projects = () => {

  // use props for something here

  return (
    <>

      <Menu currentPage="projets" />
      <p>Projets!</p>
    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 24px;
`

export default Projects;
