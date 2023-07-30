import { styled } from 'styled-components'
import Menu from './Menu'

const Homepage = () => {

  // use props for something here

  return (
    <>
    <Wrapper>
      <Menu currentPage="homepage" />
     
      <HeaderWrapper>
        <MyHeader>
          Web developer & multimedia explorer 
        </MyHeader>
      </HeaderWrapper>
        {/* idea: generate new logo via AI API */}
        <LogoHolder><LogoImg src="/jww.png" alt="Logo of John Wrinch Williams, also known as jww"></LogoImg></LogoHolder>
      </Wrapper> 
    </>   
  )
}

const LogoImg = styled.img`
  width: 100px;
  border-radius: 25px;
`

const LogoHolder = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 20px;
`


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center

`

const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  color: White;
  font-size: 80px;
  padding: 20px;
`

const MainContent = styled.p`
font-family: "Raleway";
font-weight: 300;
color: white;
font-size: 12px;
padding: 20px;
line-height: 20px;
`

const Wrapper=styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */
  background-size: 100% auto; 
  height: 100vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-color: #1f1f1f;
`

export default Homepage
