import Banner from "./Banner.tsx";
import {useEffect, useRef} from "react";

export function WonBanner({numberOfGuess, onNewGame}: { numberOfGuess: number; onNewGame: () => void }) {
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        btnRef.current?.focus();
    }, []);


    return (
        <Banner status={"success"}>
            <p className='banner-content'>🎉</p>
            <p className='banner-content'><strong>Congratulations!</strong></p>
            <p className='banner-subtitle'>You guessed
                in <strong>{numberOfGuess}</strong> {numberOfGuess === 1 ? 'try' : 'tries'}</p>
            <button ref={btnRef} className='banner-btn' onClick={onNewGame}>New Game</button>
        </Banner>
    )

}