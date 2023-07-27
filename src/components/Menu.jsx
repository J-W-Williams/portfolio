import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = ({currentPage}) => {

  return (
    <>
      <MyHeader>{currentPage}</MyHeader>
      <Link to="/about"><MyText>About!</MyText></Link>
      <Link to="/projects"><MyText>Projects!</MyText></Link>
      <Link to="/contact"><MyText>Contact!</MyText></Link>
      <Link to="/"><MyText>Back home!</MyText></Link>
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

export default Menu;
