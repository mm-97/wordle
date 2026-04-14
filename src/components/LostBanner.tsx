import Banner from "./Banner.tsx";
import {useEffect, useRef} from "react";

export function LostBanner({answer, onNewGame}: { answer: string; onNewGame: () => void }) {
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        btnRef.current?.focus();
    }, []);


    return (
        <Banner status={"error"}>
            <p className='banner-content'>😔</p>
            <p className='banner-content'><strong>Game Over</strong></p>
            <p className='banner-subtitle'>The correct answer was <strong>{answer.toUpperCase()}</strong></p>
            <button ref={btnRef} className='banner-btn' onClick={onNewGame}>New Game</button>
        </Banner>
    )

}