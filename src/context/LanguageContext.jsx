import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
   
    const [enFr, setEnFr] = useState(() => {
        
        // is there a language already set in sessionStorage?
        const currentLanguage = sessionStorage.getItem("currentLanguage");

        // return it if so; if not, return null
        if (currentLanguage) {
            return currentLanguage;            
        } else {
            return "en"
            // set storage here?
            // sessionStorage.setItem("currentLanguage")
        };
    })

    return (
        <LanguageContext.Provider value={{enFr, setEnFr}}>
            {children}
        </LanguageContext.Provider>
    )
};