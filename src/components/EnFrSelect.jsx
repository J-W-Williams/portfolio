import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'

const EnFrSelect = (currentPage) => {

    // use Context
    const { enFr, setEnFr } = useContext(LanguageContext);
    const navigate = useNavigate();    
    let goingTo = "";

    // for fancy nav

    const viewNavigate = (newRoute) => {
      // Navigate to the new route
      if (!document.startViewTransition) {
        // viewNavigate not available on this device.
        // default to normal navigate
        return navigate(newRoute);
      } else {
        return document.startViewTransition(() => {
          navigate(newRoute);
        });
      }
    };
  
       
    const toggleLanguage = () => {

      if (enFr === "fr") {
          setEnFr("en");
      } else if (enFr === "en")  {
        setEnFr("fr");
    
      }
    
    // want to set this on change.  this is so the correct language will remain if the page is refreshed.
    window.sessionStorage.setItem("currentLanguage", enFr );
    
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
        // const linkInfo = languageLinks[linkTo][enFr] || languageLinks[linkTo].en;
        const linkInfo = languageLinks[linkTo][enFr] || languageLinks[linkTo]

        return {
          url: linkInfo.url,
          title: linkInfo.title,
        };
      }
    }

    // a bit brute force but it works
    let pageNow = currentPage.page;

    if (pageNow === "homepage") {
      goingTo = "/fr/";
      setEnFr("fr");
      window.sessionStorage.setItem("currentLanguage", "fr" );
    } else if (pageNow === "acceuil") {
      goingTo = "/";
      setEnFr("en");
      window.sessionStorage.setItem("currentLanguage", "en" );
    } else if (pageNow === "contact") {
      goingTo = "/fr/contactFR";
      setEnFr("fr");
      window.sessionStorage.setItem("currentLanguage", "fr" );
    } else if (pageNow === "contactFR") {
      goingTo = "/contact";
      setEnFr("en");
      window.sessionStorage.setItem("currentLanguage", "en" );
    } else if (pageNow === "projects") {
      goingTo = "/fr/projets";
      setEnFr("fr");
      window.sessionStorage.setItem("currentLanguage", "fr" );
    } else if (pageNow === "projets") {
      goingTo = "/projects";
      setEnFr("en");
      window.sessionStorage.setItem("currentLanguage", "en" );
    } else if (pageNow === "about") {
      goingTo = "/fr/apropos";
      setEnFr("fr");
      window.sessionStorage.setItem("currentLanguage", "fr" );
    } else if (pageNow === "apropos") {
      goingTo = "/about";
      setEnFr("en");
      window.sessionStorage.setItem("currentLanguage", "en" );
    }
    
     viewNavigate(goingTo);
}    

  return (
    <>
      <LanguageSelect onClick={toggleLanguage}><LanguageSelector>EN | FR</LanguageSelector></LanguageSelect>       
    </>
  )
}
const LanguageSelector = styled.div`
font-family: "Raleway";
font-size: 18px;
cursor: pointer;    
&:hover {
    font-weight: 600;
  }
`

const MyHeader = styled.h1`
  font-family: "Raleway";
  font-size: 34px;
  
`
const LanguageSelect = styled.div`
  font-family: "Raleway";
  font-size: 12px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-weight: 200;
`

export default EnFrSelect;
