import {BaseWordDAO} from "./BaseWordDAO.ts";

export class ItalianWordDAOImpl extends BaseWordDAO {
    constructor() {
        super([
            "acqua", "amico", "amore", "avere", "bello", "bravo", "caldo", "campo", "carta",
            "cuore", "dolce", "donna", "festa", "fiore", "forza", "gatto", "grano", "laura", "madre",
            "mondo", "morte", "notte", "nuovo", "opera", "paese", "piano", "porta", "posto", "primo",
            "radio", "rosso", "salto", "sogno", "stile", "tempo", "terra", "torre", "treno", "verde",
            "vento", "visto", "volta", "zaino", "zebra"
        ]);
    }
}

