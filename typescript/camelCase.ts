import {capitalize} from './capitalize'

// Camel Case -> camelCase
function camelCase(str: string): string {
    const splitWords: string[] = str.split(' ') 
    // loop over the words
    const camelWords: string[] = splitWords.map( (word, i) => {
        // loewrcase first word
        if (i === 0) {
            return word.toLowerCase()
        }
        else {
            return capitalize(word)
        }
    })
    return camelWords.join('')
}

// console.log(camelCase('Camel Case'))

export {
    camelCase
}