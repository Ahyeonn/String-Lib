// Amazing bongo drums for sale -> ['#amazing', '#bongo', '#drums']
function makeHashTag(str: string): string[] {
    const lowerWords: string = str.toLowerCase()
    const splitWords: string[] = lowerWords.split(' ')
    const wordsList: any[] = []
    if (splitWords.length > 3) {
        const sortedArr: string[] = splitWords.sort((a, b) => b.length - a.length); // descending order [#amazzing, #bongo, #drums, #sale, #for]
        const threeWords: string[] = sortedArr.slice(0, 3)
        for (var word of threeWords) {
            const poundedWord: string = '#'.concat(word)
            wordsList.push(poundedWord)
        }
    }
    else {
        for (var word of splitWords) {
            const poundedWord: string = '#'.concat(word)
            wordsList.push(poundedWord)
        }
    }

    return wordsList
}
// console.log(makeHashTag('Amazing bongo drums zaswefaw for sale'))

export{
    makeHashTag
}