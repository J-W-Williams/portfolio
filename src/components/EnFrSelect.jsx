import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'


const EnFrSelect = (currentPage) => {

    const { enFr, setEnFr } = useContext(LanguageContext);
    const navigate = useNavigate();    
    // get current language
    console.log("enFr:", enFr);

    // check storage; if nothing, add current language to it
    // actually do want to set it on change.  this is so the correct language will stay if the page is refreshed.
    // !window.sessionStorage.getItem("currentLanguage") && window.sessionStorage.setItem("currentLanguage", enFr );
    window.sessionStorage.setItem("currentLanguage", enFr );

    // goal is: refresh or manual page entry: language maintained
    console.log("EnFrSelect, currentPage:", currentPage);
    let goToPage = currentPage.page;
    // check Context
    const toggleLanguage = () => {
    console.log("hello from toggleLanguage.  EnFR:", enFr);
    if (enFr === "fr") {
        setEnFr("en")
        console.log("enFr:", enFr);
    } else  {
        setEnFr("fr");
    }
    navigate({goToPage});
}    

  return (
    <>
      <LanguageSelect onClick={toggleLanguage}><LanguageSelector>[EN </LanguageSelector> | <LanguageSelector> FR]</LanguageSelector></LanguageSelect>       
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
