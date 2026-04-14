import {BaseWordDAO} from "./BaseWordDAO.ts";

export class WordDAOImpl extends BaseWordDAO {
    constructor() {
        super([
            "about", "above", "after", "again", "along", "among", "being", "below", "could", "every",
            "first", "found", "great", "group", "house", "large", "learn", "leave", "level", "light",
            "local", "major", "might", "money", "month", "other", "place", "point", "power", "right",
            "round", "small", "sound", "state", "still", "study", "their", "there", "these", "thing",
            "think", "those", "three", "water"
        ]);
    }
}
