export type LetterStatus = 'correct' | 'present' | 'absent';

type LetterResults = {
    letter: string;
    status: LetterStatus;
}

export type WordResults = {
    letters: LetterResults[];
}

export function compareWords(correctWord: string, guessedWord: string): WordResults {
    if (typeof guessedWord !== 'string') {
        throw new Error("guessedWord must be a string");
    }
    if (typeof correctWord !== 'string') {
        throw new Error("correctWord must be a string");
    }
    if (correctWord.length !== guessedWord.length) {
        throw new Error("guessedWord and correctWord must have the same length");
    }

    const normalizedCorrectWord = correctWord.toUpperCase();
    const normalizedGuessedWord = guessedWord.toUpperCase();

    const result: LetterResults[] = normalizedGuessedWord.split("").map((letter) => ({
        letter,
        status: "absent",
    }));
    const remainingLetters = normalizedCorrectWord.split("");

    // Pass 1: lettere nella posizione corretta
    for (let i = 0; i < normalizedGuessedWord.length; i++) {
        if (normalizedGuessedWord[i] === normalizedCorrectWord[i]) {
            result[i].status = "correct";
            remainingLetters[i] = "";
        }
    }

    // Pass 2: lettere presenti ma in posizione sbagliata
    for (let i = 0; i < normalizedGuessedWord.length; i++) {
        if (result[i].status === "correct") {
            continue;
        }

        const guessedLetter = normalizedGuessedWord[i];
        const foundIndex = remainingLetters.indexOf(guessedLetter);

        if (foundIndex !== -1) {
            result[i].status = "present";
            remainingLetters[foundIndex] = "";
        }
    }

    return {letters: result};
}