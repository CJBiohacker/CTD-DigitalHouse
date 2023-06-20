import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"
import UKUA from "./languages/ukranian.json"
import IT from "./languages/italian.json"
import CN from "./languages/chinese.json"
import JP from "./languages/japanese.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    brazilian_portuguese: {
        id: "PTBR",
        text: PTBR
    },
    spanish:{
        id: "ES",
        text: ES  
    },
    ukranian: {
        id: "UKUA",
        text: UKUA
    },
    italian: {
        id: "IT",
        text: IT
    },
    chinese: {
        id: "CN",
        text: CN
    },
    japanese: {
        id: "JP",
        text: JP
    },
};

const LanguageContext = createContext(languages.english);

export default LanguageContext;