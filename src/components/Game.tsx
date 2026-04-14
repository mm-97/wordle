import Results from "./Results.tsx";
import Input from "./Input.tsx";
import {GameOverBanner} from "./GameOverBanner.tsx";
import {type GameStatus} from "../App.tsx";
import {useEffect, useMemo, useState} from "react";
import {MAX_TRIES} from "../utils/constants.ts";
import {WordContext} from "../contexts/WordContext.ts";
import {compareWords, type LetterStatus} from "../utils/word-results.ts";

type GameProps = {
    correctWord: string;
    getAnotherWord: () => void;

}

export default function Game({correctWord, getAnotherWord}: GameProps) {

    useEffect(() => {
        console.log('Solution:', correctWord, ';)')
    }, [correctWord]);
    const [answers, setAnswer] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>('running');
    const [numberOfTry, setNumberOfTry] = useState<number>(0);

    const letterStatuses = useMemo(() => {
        const statuses = new Map<string, LetterStatus>();

        answers.forEach((answer) => {
            const result = compareWords(correctWord, answer);
            result.letters.forEach(({letter, status}) => {
                const upperLetter = letter.toUpperCase();
                if (status === 'correct') {
                    statuses.set(upperLetter, 'correct');
                } else if (status === 'present' && statuses.get(upperLetter) !== 'correct') {
                    statuses.set(upperLetter, 'present');
                } else if (!statuses.has(upperLetter)) {
                    statuses.set(upperLetter, 'absent');
                }
            });
        });

        return statuses;
    }, [answers, correctWord]);

    const usedLetters = useMemo(() => {
        const disabled = new Set<string>();
        letterStatuses.forEach((status, letter) => {
            // Solo le lettere assenti vanno disabilitate
            if (status === 'absent') {
                disabled.add(letter);
            }
        });
        return disabled;
    }, [letterStatuses]);

    function resetGame() {
        setAnswer([]);
        setGameStatus('running');
        setNumberOfTry(0);
        getAnotherWord();
    }

    function handleAnswer(answer: string) {
        if (numberOfTry >= MAX_TRIES) {
            return;
        }
        const currentNumberOfTry = numberOfTry + 1;
        setNumberOfTry(currentNumberOfTry);
        setAnswer([...answers, answer]);

        if (answer.toUpperCase() === correctWord.toUpperCase()) {
            setGameStatus('won');
        } else if (currentNumberOfTry >= MAX_TRIES) {
            setGameStatus('lost');
        }
    }

    return (
        <WordContext.Provider value={correctWord}>
            <div className="container">
                <Results results={answers}/>
                {gameStatus === 'running' && (
                    <Input
                        handleAnswer={handleAnswer}
                        letterStatuses={letterStatuses}
                        usedLetters={usedLetters}
                    />
                )}
                <GameOverBanner numberOfGuess={numberOfTry} gameStatus={gameStatus} answer={correctWord}
                                onNewGame={() => resetGame()}/>
            </div>
        </WordContext.Provider>)

}