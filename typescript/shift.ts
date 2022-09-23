// Hello World -> ello WorldH
function shift(str: string, shiftNum: number = 1): string {
    const splitWords: string[] = str.split('') // [Hello, World]
    const numChrs: any[] = splitWords.map( (word, i) => {
        if (i < shiftNum) {
            return word
        }
    })
    const Chrs: string = numChrs.join('') 
    const slicedWord: string = str.slice(shiftNum).trim() // ello World
    return slicedWord + Chrs
}

// console.log(shift('foobar', 3))

export {
    shift
}