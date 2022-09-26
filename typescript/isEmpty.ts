// Abc def -> isEmpty("Abc def") // false
function isEmpty(str: string): boolean {
    const trimmedWords: string = str.trim() // '   abc \t def '
    if (trimmedWords.length === 0) {
        return true
    }
    const splitChrs: string[] = trimmedWords.split('')
    for (let chr of splitChrs) {
        if ( chr != ' ' && chr != '\n' && chr != '\t'  ) {
            return false
        }
    }
    return true
}

console.log(isEmpty(' \tAbc def'))

export {
    isEmpty
}