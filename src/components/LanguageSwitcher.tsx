import type {LanguageCode} from "../models/LanguageCode.ts";

type LanguageSwitcherProps = {
    currentLanguage: LanguageCode,
    changeLanguage: (language: LanguageCode) => void,
}

export default function LanguageSwitcher({currentLanguage, changeLanguage}: LanguageSwitcherProps) {
    return (
        <div className="language-switcher">
            <span className="language-label">Language</span>
            <LanguageButton
                buttonLanguage={'en'}
                currentLanguage={currentLanguage}
                changeLanguage={changeLanguage}
                languageLabel={'EN'}/>
            <LanguageButton
                buttonLanguage={'it'}
                currentLanguage={currentLanguage}
                changeLanguage={changeLanguage}
                languageLabel={'IT'}/>
        </div>
    )
}

type LanguageButtonProps = {
    buttonLanguage: LanguageCode;
    currentLanguage: LanguageCode;
    changeLanguage: (language: LanguageCode) => void;
    languageLabel: string;
}

function LanguageButton({buttonLanguage, currentLanguage, changeLanguage, languageLabel}: LanguageButtonProps) {
    return (
        <button
            className={`language-btn ${currentLanguage === buttonLanguage ? 'active' : ''}`}
            onClick={() => changeLanguage(buttonLanguage)}
            type="button"
        >
            {languageLabel}
        </button>
    )
}