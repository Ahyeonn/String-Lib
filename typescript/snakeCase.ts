import {kebobCase} from './kebobCase.js'
//  what the heck  -> what_the_hack
function snakeCase(str: string): string {
    return kebobCase(str, '_')
}

// console.log(snakeCase(' what the heck '))

export {
    snakeCase
}