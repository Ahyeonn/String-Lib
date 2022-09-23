import {removeExtraSpaces} from './removeExtraSpaces.js'

// Hello world -> hello-world
function kebobCase(str: string, separator: string = '-'): string {
    const lowerWords: string = str.toLowerCase()
    const splitChrs: string[] = lowerWords.split('')
    const filterdWords: string[] = splitChrs.filter( (chr) => {
        const code = chr.charCodeAt(0) // get character code for the chracterr at index zero
        if (code > 96 && code < 123) { // keep letters 
            return true
        } else if (code > 47 && code < 58) { // keep numbers
            return true
        } else if (code === 32 || code === 45) { // keep hyphen
            return true
        }
        return false
    })
    const joinedWords: string = filterdWords.join('')
    // remove extra spaces
    const spaceFree: string = removeExtraSpaces(joinedWords) //use removeExtraSpaces function to remove spaces
    return spaceFree.split(' ').join(separator)
}

// console.log(kebobCase('Hello    world'))
export {
    kebobCase
}