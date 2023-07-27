import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Menu from './Menu'

const Homepage = () => {

  // use props for something here

  return (
    <>
    <Menu currentPage="homepage" />
    </>   
  )
}


export default Homepage
