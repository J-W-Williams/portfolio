import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
   
    const [enFr, setEnFr] = useState(() => {
        
        // is there a language set in sessionStorage?
        const currentLanguage = sessionStorage.getItem("currentLanguage");

        // Step 2: Parse stored data
        // const asJSON = JSON.parse(currentLanguage);
    
        // Step 3: If so, return it. Else return English.
        if (currentLanguage) {return currentLanguage} else {return "en"};

        // actually navigate to the page / change languages.

    })

    return (
        <LanguageContext.Provider value={{enFr, setEnFr}}>
            {children}
        </LanguageContext.Provider>
    )
};