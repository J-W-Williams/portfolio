import Menu from './Menu'
import { styled } from 'styled-components'
import { useState } from 'react'
import RandomGreeting from './RandomGreeting'

const Acceuil = () => {

  // use props for something here

  const greetingMessages = ["intégrateur", "explorateur multimédia", "futur collègue", "amateur de JavaScript", "développeur full-stack", "autodidacte", "programmeur", "traceur", "penseur"]

  return (
    <>
    <Wrapper>
      <Menu currentPage="acceuil" />
     
      <HeaderWrapper>
        <MyHeader>
          Développeur Web &
          <RandomGreeting greetingMessages={greetingMessages}/>
        </MyHeader>
      </HeaderWrapper>
      <IconWrapper>
        <ImgWrapper src="/email.png"></ImgWrapper>
        <ImgWrapper src="/linkedIn.png"></ImgWrapper>
        <ImgWrapper src="/github.png"></ImgWrapper>
      </IconWrapper>

      </Wrapper> 
    </>   
  )
}


const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  position: absolute;
  bottom: 8px;
  right: 16px;
  `

const ImgWrapper = styled.img`
  width: 50px;
  &:hover {
    scale: 1.15;
  }
  margin-left: 40px;
  margin-right: 30px;
  cursor: pointer;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  color: White;
  /* font-size: 80px; */
  font-size: 9vw;
  padding: 20px;  
`

const Wrapper = styled.div`
  height: 100vh; 
`

export default Acceuil
