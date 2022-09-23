// Abc def -> isEmpty("Abc def") // false
function isEmpty(str: string): any {
    const trimmedWords: string = str.trim() // '   abc \t def '
    if (trimmedWords.length === 0) {
        return true
    }
    const splitChrs: string[] = trimmedWords.split('')
    for (var chr of splitChrs) {
        if ( chr != ' ' && chr != '\t'  ) {
            return false
        }
        return true
    }
}

console.log(isEmpty(' \tAbc def'))

export {
    isEmpty
}