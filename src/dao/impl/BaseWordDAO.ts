import type {WordModel} from "../../models/WordModel.ts";
import type {WordDAO} from "../WordDAO.ts";

export abstract class BaseWordDAO implements WordDAO {
    private readonly words: string[];

    protected constructor(words: string[]) {
        this.words = words;
    }

    getRandomWord(): WordModel {
        return {word: this.pickRandomWord()};
    }

    getRandomWordByDate(date: Date): WordModel {
        const dayStart = date.setHours(0, 0, 0, 0);
        return {word: this.words[Math.floor(dayStart % this.words.length)]};
    }

    private pickRandomWord(): string {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
}
