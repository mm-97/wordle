export function rangeToN(n: number) {
    if (n < 1) {
        return [];
    }
    return Array.from({length: n}, (_, index) => index);
}

export function rangeFromTo(from: number, to: number) {
    if (to < from) {
        return [];
    }
    const length = to - from;
    return Array.from({length}, (_, index) => from + index);
}