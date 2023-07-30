import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
   
    const [enFr, setEnFr] = useState(() => {
        
        // is there a language set in sessionStorage?
       
        console.log("hello from Language Provider.")
        console.log("checking for session storage...");
        const currentLanguage = sessionStorage.getItem("currentLanguage");

        console.log("currentLanguage:", currentLanguage);
        // Step 2: Parse stored data
        // const asJSON = JSON.parse(currentLanguage);
        
        // on first load
        // Step 3: If so, return it. Else return English.
        if (currentLanguage) {return currentLanguage} else {return "en"};
        // maybe this above line is messing me up.

        // actually navigate to the page / change languages.

    })

    return (
        <LanguageContext.Provider value={{enFr, setEnFr}}>
            {children}
        </LanguageContext.Provider>
    )
};