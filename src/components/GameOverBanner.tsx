import type {GameStatus} from "../App.tsx";
import {WonBanner} from "./WonBanner.tsx";
import {LostBanner} from "./LostBanner.tsx";

type GameOverBannerProps = {
    numberOfGuess: number;
    gameStatus: GameStatus;
    answer: string;
    onNewGame: () => void;
}

export function GameOverBanner({numberOfGuess, gameStatus, answer, onNewGame}: GameOverBannerProps) {

    return (
        <>
            {(gameStatus === 'won') && <WonBanner numberOfGuess={numberOfGuess} onNewGame={onNewGame}/>}
            {(gameStatus === 'lost') && <LostBanner answer={answer} onNewGame={onNewGame}/>}
        </>
    )

}