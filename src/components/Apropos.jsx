import Menu from "./Menu";
import { styled } from "styled-components";

const Apropos = () => {

  // use props for something here

  return (
    <>

    <Wrapper>
    <Menu currentPage="apropos" />

    <MyHeader>Mais c'est qui John?</MyHeader>
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
  
    Bonjour!  Je suis John Wrinch Williams, un développeur web basé à Montréal (QC). Les technologies que j'utilise actuellement se trouvent en haut.  J'utilise mon deuxième nom car les John Williams, nous sommes nombreux!  Mais il y'a seulement un moi.  Explorez mon site, et si jamais je peux vous aider avec quelque-chose, n'hesitez pas de me contacter!
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
  font-size: 9vw;
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
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
`

export default Apropos
