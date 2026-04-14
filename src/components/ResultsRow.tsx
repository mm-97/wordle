import Cell from "./Cell.tsx";
import {rangeToN} from "../utils/range-utils.ts";
import type {WordResults} from "../utils/word-results.ts";

type ResultsRowProps = {
    comparedWord?: WordResults | undefined;
}

export default function ResultsRow({comparedWord}: ResultsRowProps) {

    return (
        <tr>
            {rangeToN(5).map(index => (
                <Cell key={index} value={
                    comparedWord?.letters[index].letter || ''
                } color={
                    comparedWord?.letters[index].status === 'correct' ?'green' :
                        comparedWord?.letters[index].status === 'present' ? 'yellow' :
                            comparedWord?.letters[index].status === 'absent' ? 'gray'
                            : 'white'
                }></Cell>
            ))
            }
        </tr>
    )
}