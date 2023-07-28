import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import EnFrSelect from './EnFrSelect'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import siteText from "../data/siteText.json";

const Menu = ({currentPage}) => {

  const { enFr, setEnFr } = useContext(LanguageContext);
  
  const getTranslation = (section, key) => {
    return siteText[enFr][section][key];
  };

  const getLink = (linkTo, title) => {

    const languageLinks = {
      projects: {
        en: { url: '/projects', title: 'Projects' },
        fr: { url: '/projets', title: 'Projets' },
      },
      about: {
        en: { url: '/about', title: 'About' },
        fr: { url: '/accueil', title: 'Accueil' },
      },
      contact: {
        en: { url: '/contact', title: 'Contact' },
        fr: { url: '/contactFR', title: 'Contact' },
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
      <Link to={getLink('projects', 'Projects').url} style={{textDecoration: 'none'}}>
      <LinkText>  {getLink('projects', 'Projects').title}  </LinkText>
      </Link>
      <Link to={getLink('about', 'About').url} style={{textDecoration: 'none'}}>
      <LinkText>  {getLink('about', 'Acceuil').title}  </LinkText>
      </Link>
      <Link to={getLink('contact', 'Contact').url} style={{textDecoration: 'none'}}>
           <LinkText> {getLink('contact', 'Contacts').title} </LinkText>
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
