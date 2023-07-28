import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import EnFrSelect from './enFrSelect'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Menu = ({currentPage}) => {

  const { enFr, setEnFr } = useContext(LanguageContext);

  return (
    <>
      <EnFrSelect page={currentPage}/>
      <MyHeader>{currentPage}</MyHeader>
      {enFr === "en" ?   <Link to="/about"><MyText>About!</MyText></Link> : <Link to="/fr/apropos"><MyText>A propos!</MyText></Link>}
      {enFr === "en" ?   <Link to="/projects"><MyText>Projects!</MyText></Link> : <Link to="/fr/projets"><MyText>Projets!</MyText></Link>}                                 
      {enFr === "en" ?   <Link to="/contact"><MyText>Contact!</MyText></Link> : <Link to="/fr/contact"><MyText>Contact!</MyText></Link>} 
      {enFr === "en" ?   <Link to="/"><MyText>Back Home!</MyText></Link> : <Link to="/fr"><MyText>Acceuil!</MyText></Link>}     

    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 34px;
`
const MyText = styled.div`
  font-family: "Vollkorn";
  font-size: 24px;
  text-decoration: none;
`

export default Menu;
