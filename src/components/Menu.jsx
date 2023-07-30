import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import EnFrSelect from "./EnFrSelect";
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import siteText from "../data/siteText.json";
import { useNavigate } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";

const Menu = ({currentPage}) => {

  const { enFr, setEnFr } = useContext(LanguageContext);

 // console.log("hello from menu. enFr:", enFr);

  const navigate = useNavigate();

  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };
  
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
        fr: { url: '/fr/apropos', title: 'A propos' },
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


  

  // console.log("siteText:", siteText);
  
// need to highlight currently-selected menu item

  return (
    <>
    <Wrapper>
      <MyHeader onClick={() => {viewNavigate(getLink('homepage').url)}}>{getTranslation('home', 'title')}</MyHeader>
      <EnFrSelect page={currentPage}/>
    </Wrapper>
    <LinkHolder>
      
      <LinkText onClick={() => {viewNavigate(getLink('about').url)}}>{getLink("about").title}</LinkText>
      <LinkText onClick={() => {viewNavigate(getLink('projects').url)}}>{getLink("projects").title}</LinkText>
      <LinkText onClick={() => {viewNavigate(getLink('contact').url)}}>{getLink("contact").title}</LinkText>
    

      </LinkHolder>

    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const LinkHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Raleway";
  font-weight: 200;
  padding-bottom: 1px solid black;
  cursor: pointer;
  padding: 20px;
`

const LinkText = styled.div`
  color: white;
  padding-right: 10px;
  &:hover {
    font-weight: 600;
  }
`

const MyHeader = styled.h1`
  font-family: "Raleway";
  font-size: 24px;
  cursor: pointer;
  font-weight: 200;
  &:hover {
    font-weight: 600;
  }
`
const MyText = styled.div`
  font-family: "Raleway";
  font-size: 24px;
  text-decoration: none;
`

export default Menu;
