import {useEffect, useRef, useState} from "react";
import type {LetterStatus} from "../utils/word-results.ts";
import Keyboard from "./Keyboard.tsx";

type InputProps = {
    handleAnswer: (value: string) => void;
    letterStatuses?: Map<string, LetterStatus>;
    usedLetters?: Set<string>;
}
export default function Input({handleAnswer, letterStatuses = new Map(), usedLetters = new Set()}: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const [value, setValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const nonLetter = /[^a-zA-Z]/g;
        const value = e.target.value.replace(nonLetter, '').toUpperCase();
        setValue(value);
    }

    function handleKeyboardClick(letter: string) {
        if (value.length < 5) {
            setValue(value + letter.toUpperCase());
        }
    }

    function validateInput(value: string): boolean {
        return value.length === 5;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (validateInput(value)) {
            handleAnswer(value);
            setValue('');
        }

    }

    return (
        <div className="input-section">
            <form className='guess-form' onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    minLength={5}
                    className='guess-input'
                    required={true}
                    maxLength={5} type='text'
                    onChange={handleChange}
                    value={value}/>
                <button className='guess-submit' type='submit' aria-label='Invia'>{'>'}</button>
            </form>
            <Keyboard
                onKeyClick={handleKeyboardClick}
                letterStatuses={letterStatuses}
                disabledLetters={usedLetters}
            />
        </div>
    )
}