import Menu from "./Menu";
import { styled } from "styled-components";


const About = () => {

  // use props for something here

  return (
    <>

      <Wrapper>
      <Menu currentPage="about" />
      <MyHeader>Hi, I'm John.  Thanks for stopping by!</MyHeader>
      
    <PortraitHolder>
      <Portrait src = "../src/assets/moi2.png" alt="Photo of John Wrinch Williams"></Portrait>
    </PortraitHolder>
      <MainContent>
      I'm John Wrinch Williams, a web developer based in Montreal (QC).  I use my middle name because we John Williamses are legion!  But there's only one of me.  Please have a look around and if there's anything I can help you with, please don't hesitate to reach out directly.
      </MainContent>
      <MainContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu nisi dolor. Nullam gravida, eros et aliquet tempor, diam purus rutrum dui, ut venenatis eros neque in metus. Maecenas commodo lobortis nunc, ut ultrices ipsum facilisis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</MainContent>
      <MainContent>Here is the tech stack I'm currently working with:
      </MainContent>


    <IconWrapper>
      <ImgWrapper src="/html.png" alt="HTML5"></ImgWrapper>
      <ImgWrapper src="/css.png" alt="CSS3"></ImgWrapper>
      <ImgWrapper src="/javascript.png" alt="JavaScript"></ImgWrapper>
      <ImgWrapper src="/react.png" alt="React"></ImgWrapper>
      <ImgWrapper src="/mongo.svg" alt="MongoDB"></ImgWrapper>
      <ImgWrapper src="/node.png" alt="NodeJS"></ImgWrapper>
      <ImgWrapper src="/insomnia.png" alt="Insomnia"></ImgWrapper>
      <ImgWrapper src="/vscode.png" alt="Visual Studio Code"></ImgWrapper>
    </IconWrapper>

    </Wrapper>
    </>

  )
}

const PortraitHolder = styled.div`
  border-radius: 90px;
  width: 150px;
  `

const Portrait = styled.img`
  width: 150px;
  border-radius: 75px;
  border: 5px solid white;
  margin-left: 20px;
`

const Wrapper = styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */


  background-color: #1f1f1f;
`
const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  color: white;
  font-size: 18px;
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

const ImgWrapper = styled.img`
  width: 50px;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
`

export default About
