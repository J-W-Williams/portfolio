import Menu from "./Menu";
import { styled } from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  // use props for something here

  return (
    <>

      <Wrapper>
      <Menu currentPage="about" />
      {/* have thought bubbles bubbling up from the portrait image */}
      {/* also API call to mutate face */}
      <MyHeader>Who is this John person anyway?</MyHeader>

    <PortraitAndStack>
    <PortraitHolder>
      <Portrait src = "/moi2.png" alt="Photo of John Wrinch Williams"></Portrait>
    </PortraitHolder>

    <IconWrapper>
   
      <IconAndTextHolder>
        <ImgWrapper src="/html5.png" alt="HTML5"></ImgWrapper>
        <IconDescription>HTML5</IconDescription>
      </IconAndTextHolder>
      
      <IconAndTextHolder>
        <ImgWrapper src="/css3.png" alt="CSS3"></ImgWrapper>
        <IconDescription>CSS3</IconDescription>
      </IconAndTextHolder>
     
      <IconAndTextHolder>
        <ImgWrapper src="/javascript.png" alt="JavaScript"></ImgWrapper>
        <IconDescription>JavaScript</IconDescription>
      </IconAndTextHolder>

      <IconAndTextHolder>
        <ImgWrapper src="/react.png" alt="React"></ImgWrapper>
        <IconDescription>React</IconDescription>
      </IconAndTextHolder>

      <IconAndTextHolder>
        <ImgWrapper src="/mongo.svg" alt="MongoDB"></ImgWrapper>
        <IconDescription>MongoDB</IconDescription>
      </IconAndTextHolder>
      
      <IconAndTextHolder>
        <ImgWrapper src="/node.png" alt="NodeJS"></ImgWrapper>
        <IconDescription>node.js</IconDescription>
      </IconAndTextHolder>
   
      <IconAndTextHolder>
      <ImgWrapper src="/insomnia.png" alt="Insomnia"></ImgWrapper>
        <IconDescription>Insomnia</IconDescription>
      </IconAndTextHolder>
 
      <IconAndTextHolder>
      <ImgWrapper src="/vscode.png" alt="Visual Studio Code"></ImgWrapper>
        <IconDescription>VS Code</IconDescription>
      </IconAndTextHolder>
   
    </IconWrapper>
    </PortraitAndStack> 
      <MainContent>
      I'm John Wrinch Williams, a web developer based in Montreal (QC).  You can see my tech stack above.  I use my middle name because we John Williamses are many!  But there's only one of me.  Please have a look around and if there's anything I can help you with, please don't hesitate to reach out directly!
      </MainContent>

    

    </Wrapper>
    </>

  )
}

const PortraitAndStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

const IconAndTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconDescription = styled.div`
  font-family: "Raleway";
  font-size: 10px;
  padding-top: 3px;

`

const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  color: White;
  font-size: 80px;
  padding: 20px;
`

const PortraitHolder = styled.div`
  border-radius: 90px;
  width: 150px;
  `

const Portrait = styled.img`
  width: 150px;
  border-radius: 75px;
  border: 1px solid white;
  margin-left: 20px;
  &:hover {
    scale: 1.05;
  }
`

const Wrapper = styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */


  background-color: #1f1f1f;
`

const MainContent = styled.p`
font-family: "Raleway";
font-weight: 300;
color: white;
font-size: 16px;
padding: 20px;
line-height: 20px;
`

const ImgWrapper = styled.img`
  width: 50px;
  &:hover {
    scale: 1.15;
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
`

export default About
