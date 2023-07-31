import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
   
    const [enFr, setEnFr] = useState(() => {
        
        // is there a language set in sessionStorage?
       
        console.log("hello from Language Provider.")
        console.log("checking for session storage...");
        const currentLanguage = sessionStorage.getItem("currentLanguage");

        console.log("LanguageProvider says currentLanguage:", currentLanguage);

        // return it if so; if not, it's first load, so set to English.
        if (currentLanguage) {
            console.log("LanguageProvider: I'm returning", currentLanguage);
            return currentLanguage;
            
        } else {
            console.log("languageProvider: no language in storage, setting to English");
            return "en"
            // set storage here?
            // sessionStorage.setItem("currentLanguage")
        };
        // maybe this above line is messing me up.



    })

    return (
        <LanguageContext.Provider value={{enFr, setEnFr}}>
            {children}
        </LanguageContext.Provider>
    )
};