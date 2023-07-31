import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import EnFrSelect from "./EnFrSelect";
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import siteText from "../data/siteText.json";
import { useNavigate } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Menu = ({currentPage}) => {

  // need the Manu to be self-sufficient, without receiving currentPage.
  // that way it can render the correct language based on the page
  // in the case where the user manually navigates to a page.
  const testPage = location.pathname;
  const { enFr, setEnFr } = useContext(LanguageContext);

  // catch if user manually navigates here
  // after changing language
  console.log("testPage with useLocation:", testPage);
  if (testPage === "/") {
    setEnFr("en");
    // this works but throws an error
    // figure this out.
  }

 

 console.log("hello from menu. currentLanguage:", enFr);

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
        fr: { url: '/fr/apropos', title: 'À propos' },
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

    <AvatarHolder>
      <Avatar src = "/moi2.png" alt="Avatar of John Wrinch Williams"></Avatar>
    </AvatarHolder>
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

const AvatarHolder = styled.div`
  border-radius: 40px;
  width: 80px;
  `

const Avatar = styled.img`
  width: 40px;
  border-radius: 20px;
  border: 1px solid white;
  /* margin-left: 20px; */
  &:hover {
    scale: 1.05;
  }
`

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
