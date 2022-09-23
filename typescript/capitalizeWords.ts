import {capitalize} from './capitalize.js'

// do all the things -> Do All The Things
function capitalizeWords(str: string): string {
    const wordsList: string[] = str.split(' ') // [do],[all],[the],[things]
    const upperWords: string[] = wordsList.map( word => capitalize(word)) // upperWords = [Do], [All], ['The'], ['Things']
    return upperWords.join(' ') // Do All The Things
}

// console.log(capitalizeWords('do all the things'))

export {
    capitalizeWords
}