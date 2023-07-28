import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import EnFrSelect from "./EnFrSelect";
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import siteText from "../data/siteText.json";

const Menu = ({currentPage}) => {

  const { enFr, setEnFr } = useContext(LanguageContext);
  
  const getTranslation = (section, key) => {
    return siteText[enFr][section][key];
  };

  const getLink = (linkTo) => {

    const languageLinks = {
      homepage: {
        en: { url: '/', title: 'Homepage' },
        fr: { url: '/fr', title: 'Acceuil' },
      },
      projects: {
        en: { url: '/projects', title: 'Projects' },
        fr: { url: '/fr/projets', title: 'Projets' },
      },
      about: {
        en: { url: '/about', title: 'About' },
        fr: { url: '/fr/apropos', title: 'Apropos' },
      },
      contact: {
        en: { url: '/contact', title: 'Contact' },
        fr: { url: '/fr/contactFR', title: 'Contact' },
      },
    };

    if (languageLinks[linkTo]) {
      const linkInfo = languageLinks[linkTo][enFr] || languageLinks[linkTo].en;
      return {
        url: linkInfo.url,
        title: linkInfo.title,
      };
    }
  }

  console.log("siteText:", siteText);
  
  return (
    <>

    <EnFrSelect page={currentPage}/>
    <MyHeader>{getTranslation('home', 'title')}</MyHeader>

    <LinkHolder>
      <Link to={getLink('about').url} style={{textDecoration: 'none'}}>
        <LinkText>{getLink('about').title}</LinkText>
      </Link>
      <Link to={getLink('projects').url} style={{textDecoration: 'none'}}>
        <LinkText>{getLink('projects').title}</LinkText>
      </Link>  
      <Link to={getLink('contact').url} style={{textDecoration: 'none'}}>
        <LinkText> {getLink('contact').title} </LinkText>
      </Link>
      </LinkHolder>

    </>
  )
}

const LinkHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Vollkorn";
`

const LinkText = styled.div`
  color: black;
  padding-right: 10px;
`

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
