import Menu from "./Menu";
import { styled } from "styled-components";

const Apropos = () => {

  // use props for something here

  return (
    <Wrapper>
    <>

      <Menu currentPage="apropos" />
      <p>À propos de moi!</p>

      

    </>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    background-image: url("../src/assets/bg2.jpg");
  background-size: 100% auto; 
  height: 100vh; 
  background-position: center; 
  background-repeat: no-repeat; 
`

export default Apropos
