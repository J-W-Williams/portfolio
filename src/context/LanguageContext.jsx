import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("fr");

export const LanguageProvider = ({ children }) => {
   
    const [enFr, setEnFr] = useState(() => {
        
        // 3 steps taken from workshop instructions
        
        // Step 1: Grab data from storage
        // on refresh or manual navigation 
        const currentLanguage = sessionStorage.getItem("currentLanguage");

        // Step 2: Parse stored data
        // const asJSON = JSON.parse(currentLanguage);
    
        // Step 3: If data exists, return it. Else return null.
        if (currentLanguage) {return currentLanguage} else {return "fr"};

    })

    return (
        <LanguageContext.Provider value={{enFr, setEnFr}}>
            {children}
        </LanguageContext.Provider>
    )
};