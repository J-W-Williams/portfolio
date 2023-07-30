import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import siteText from "../data/siteText.json";


const EnFrSelect = (currentPage) => {

    // just want it to navigate to the paired page
    // 

    const { enFr, setEnFr } = useContext(LanguageContext);
    const navigate = useNavigate();    
    let goingTo = "";

    // for fancy nav

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
    // get current language
       
      // check Context
    // make this a Ternary
    const toggleLanguage = () => {
    //console.log("hello from toggleLanguage.  current language:", enFr);
    if (enFr === "fr") {
        setEnFr("en");
        //enFr = "en";
        //console.log("From toggle: changed language to en, but it's not available here yet:", enFr);
    } else if (enFr === "en")  {
        setEnFr("fr");
        //enFr = "fr";
      //  console.log("From toggle: changed language to fr, but it's not available here yet:", enFr);
    }
    
    // check storage; if nothing, add current language to it
    // actually do want to set it on change.  this is so the correct language will stay if the page is refreshed.
    // !window.sessionStorage.getItem("currentLanguage") && window.sessionStorage.setItem("currentLanguage", enFr );
    window.sessionStorage.setItem("currentLanguage", enFr );

    // goal is: refresh or manual page entry: language maintained
    // console.log("EnFrSelect, currentPage:", currentPage);



    
    const getLink = (linkTo) => {

      console.log("lookng up: " + linkTo);
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

  
    // toggle URL 
    // console.log("EnFrSelect: currentPage:", currentPage.page);
    
    //let goToPage = getLink(currentPage.page);
    // let goToPageURL = goToPage.url;
    let pageNow = currentPage.page;
    console.log("pageNow:", currentPage.page)

    if (pageNow === "homepage") {
      goingTo = "/fr/";
    } else if (pageNow === "acceuil") {
      goingTo = "/";
    } else if (pageNow === "contact") {
      goingTo = "/fr/contactFR";
    } else if (pageNow === "contactFR") {
      goingTo = "/contact";
    } else if (pageNow === "projects") {
      goingTo = "/fr/projets";
    } else if (pageNow === "projets") {
      goingTo = "/projects";
    } else if (pageNow === "about") {
      goingTo = "/fr/apropos";
    } else if (pageNow === "apropos") {
      goingTo = "/about";
    }
    
    console.log("goingTo:", goingTo);
    ; 

    //console.log("goToPage:", goToPage);
    // console.log("goToPage.url:", goToPageURL);
    // console.log("typeOf goToPage.url", typeof(goToPageURL));
    
    // console.log("navigating to...", goToPageURL)
     viewNavigate(goingTo);
}    

  return (
    <>
      <LanguageSelect onClick={toggleLanguage}><LanguageSelector>[EN / FR]</LanguageSelector></LanguageSelect>       
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
