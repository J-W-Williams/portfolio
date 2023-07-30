import Menu from "./Menu";
import { styled } from "styled-components";

const Apropos = () => {

  // use props for something here

  return (
    <>

    <Wrapper>
    <Menu currentPage="apropos" />
    {/* have thought bubbles bubbling up from the portrait image */}
    {/* also API call to mutate face */}
    <MyHeader>Mais c'est qui cette personne nommé John?</MyHeader>
    {/* idea: have many different greetings when you get here. */}
  {/* Greetings!       */}
  {/* It could fade out & in between many of them using a .... setInteval! */}
  <PortraitHolder>
    <Portrait src = "/moi2.png" alt="Photo of John Wrinch Williams"></Portrait>
  </PortraitHolder>
    <MainContent>
    Bonjour!  Je suis John Wrinch Williams, un développeur web basé à Montréal (QC).  J'utilise mon deuxième nom car les John Williams, nous sommes nombreux!  Mais il y'a seulement un moi.  Explorez mon site, et si jamais je peux vous aider avec quelque-chose, n'hesitez pas de me contacter!
    </MainContent>
    <MainContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu nisi dolor. Nullam gravida, eros et aliquet tempor, diam purus rutrum dui, ut venenatis eros neque in metus. Maecenas commodo lobortis nunc, ut ultrices ipsum facilisis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</MainContent>
    <MainContent>Voici les technologies Web que j'utilisent actuellment:
    </MainContent>


  <IconWrapper>
 {/* For icons, need title below.  tiny flex UI design. */}
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
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
`

export default Apropos
