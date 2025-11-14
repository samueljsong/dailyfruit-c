import { createContext, useEffect, useState, useContext, type ReactNode } from "react";
import EN from "../locales/en-US.json";
import KR from "../locales/ko-KR.json";

type LanguageContextType = {
    lang: typeof EN;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children } : { children: ReactNode }) => {
    const [lang, setLang] = useState(EN);

    useEffect(() => {
        const userLang = navigator.language;
        if (userLang.startsWith("ko"))
            setLang(KR);
        else
            setLang(EN);
    }, []);

    return (
        <LanguageContext.Provider value ={{lang}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    
    if (!context){
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context.lang;
};