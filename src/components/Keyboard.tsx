import type {LetterStatus} from "../utils/word-results.ts";

type KeyboardProps = {
    onKeyClick: (letter: string) => void;
    letterStatuses: Map<string, LetterStatus>;
    disabledLetters?: Set<string>;
}

export default function Keyboard({onKeyClick, letterStatuses, disabledLetters = new Set()}: KeyboardProps) {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    function getKeyStatus(letter: string): LetterStatus | undefined {
        return letterStatuses.get(letter);
    }

    function getKeyClass(letter: string): string {
        const status = getKeyStatus(letter);
        const baseClass = 'keyboard-key';
        const statusClass = status ? `key-${status}` : '';
        const disabledClass = disabledLetters.has(letter) ? 'key-disabled' : '';

        return [baseClass, statusClass, disabledClass].filter(Boolean).join(' ');
    }

    return (
        <div className="keyboard">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((letter) => (
                        <button
                            key={letter}
                            className={getKeyClass(letter)}
                            onClick={() => onKeyClick(letter.toLowerCase())}
                            disabled={disabledLetters.has(letter)}
                            type="button"
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}

