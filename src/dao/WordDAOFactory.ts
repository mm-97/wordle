import type {LanguageCode} from "../models/LanguageCode.ts";
import type {WordDAO} from "./WordDAO.ts";
import {ItalianWordDAOImpl} from "./impl/ItalianWordDaoImpl.ts";
import {WordDAOImpl} from "./impl/WordDaoImpl.ts";

const daoByLanguage: Record<LanguageCode, WordDAO> = {
    en: new WordDAOImpl(),
    it: new ItalianWordDAOImpl(),
};

export function getWordDAO(language: LanguageCode): WordDAO {
    return daoByLanguage[language];
}

