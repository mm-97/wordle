import './App.css'
import {useState} from "react";
import type {LanguageCode} from "./models/LanguageCode.ts";
import {getWordDAO} from "./dao/WordDAOFactory.ts";
import Game from "./components/Game.tsx";
import LanguageSwitcher from "./components/LanguageSwitcher.tsx";
import Footer from "./components/Footer.tsx";


export type GameStatus = 'running' | 'won' | 'lost';


function App() {
    const repositoryUrl = 'https://github.com/mm-97/wordle';

    const [language, setLanguage] = useState<LanguageCode>('en');
    const [correctWord, setCorrectWord] = useState<string>(
      () => getWordDAO('en').getRandomWord().word
    );

    function getAnotherWord(nextLanguage: LanguageCode = language) {
      setCorrectWord(getWordDAO(nextLanguage).getRandomWord().word);
    }

    function changeLanguage(nextLanguage?: LanguageCode) {
      if (!nextLanguage || nextLanguage === language) return;
      setLanguage(nextLanguage);
      getAnotherWord(nextLanguage);
    }


    return (
            <div className="container">
                <LanguageSwitcher currentLanguage={language} changeLanguage={changeLanguage}/>
                <Game key={language} correctWord={correctWord} getAnotherWord={getAnotherWord}/>
                <Footer repoUrl={repositoryUrl}/>
            </div>
    )
}

export default App
