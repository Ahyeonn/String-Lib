//    Hello    world! -> Hello world
function removeExtraSpaces(str: string): string {
    const trimmedWords: string = str.trim()
    const splitWords: string[] = trimmedWords.split(' ')
    const filteredWords: string[] = splitWords.filter( (word) => word !== '' )
    return filteredWords.join(' ')
 }
 
//  console.log(removeExtraSpaces('   Hello    world!    '))

 export {
    removeExtraSpaces
}