import ResultsRow from "./ResultsRow.tsx";
import {rangeToN} from "../utils/range-utils.ts";
import {memo, useContext, useMemo} from "react";
import {compareWords, type WordResults} from "../utils/word-results.ts";
import {MAX_TRIES} from "../utils/constants.ts";
import {WordContext} from "../contexts/WordContext.ts";

type ResultsProps = {
    results: string[];
}

function Results({results = []}: ResultsProps) {
    const correctWord = useContext(WordContext);
    const comparedWords: WordResults[] = useMemo(() => {
        return results.map((r) => compareWords(correctWord, r))
    }, [results, correctWord]);
    return (<>
            <table className='results'>
                <tbody>
                {rangeToN(MAX_TRIES).map((index) => (
                    <ResultsRow key={index} comparedWord={comparedWords[index]}/>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default memo(Results);