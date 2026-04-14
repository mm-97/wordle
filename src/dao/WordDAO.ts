import type {WordModel} from "../models/WordModel.ts";

export interface WordDAO {
    getRandomWord(): WordModel;

    getRandomWordByDate(data: Date): WordModel;
}