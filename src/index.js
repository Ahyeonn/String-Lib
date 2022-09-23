// hello world -> Hello world
function capitalize(str) {
    // If empty string, return empty string
    if (str.length === 0) {
        return str
    }
    // First Character
    const firstChr = str[0]
    // Change the first character to upper case
    const upperCase = firstChr.toUpperCase()
    // All the letters other than the first letter
    const otherChrs = str.slice(1)

    return upperCase+otherChrs
}

console.log(capitalize('hello'))

// foo bar -> FOO BAR 
function allCaps(str) {
    return str.toUpperCase()
}

console.log(allCaps('foo bar'))


// do all the things -> Do All The Things
function capitalizeWords(str) {
    const wordsList = str.split(' ') // [do],[all],[the],[things]
    const upperWords = wordsList.map( word => capitalize(word)) // upperWords = [Do], [All], ['The'], ['Things']
    return upperWords.join(' ') // Do All The Things
}

console.log(capitalizeWords('do all the things'))

//    Hello    world! -> Hello world
function removeExtraSpaces(str) {
   const trimmedWords = str.trim()
   const splitWords = trimmedWords.split(' ')
   const filteredWords = splitWords.filter( (word) => word !== '' )
   return filteredWords.join(' ')
}

console.log(removeExtraSpaces('   Hello    world!    '))


// Hello world -> hello-world
function kebobCase(str, separator = '-') {
    const lowerWords = str.toLowerCase()
    const splitChrs = lowerWords.split('')
    const filterdWords = splitChrs.filter( (chr) => {
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
    const joinedWords = filterdWords.join('')
    // remove extra spaces
    const spaceFree = removeExtraSpaces(joinedWords) //use removeExtraSpaces function to remove spaces
    return spaceFree.split(' ').join(separator)
}

console.log(kebobCase('Hello    world'))

//  what the heck  -> what_the_hack
function snakeCase(str) {
    return kebobCase(str, '_')
}

console.log(snakeCase(' what the heck '))


// Camel Case -> camelCase
function camelCase(str) {
    const splitWords = str.split(' ') 
    // loop over the words
    const camelWords = splitWords.map( (word, i) => {
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

console.log(camelCase('Camel Case'))


// Hello World -> ello WorldH
function shift(str, shiftNum = 1) {
    const splitWords = str.split('') // [Hello, World]
    const numChrs = splitWords.map( (word, i) => {
        if (i < shiftNum) {
            return word
        }
    })
    const Chrs = numChrs.join('') 
    const slicedWord = str.slice(shiftNum).trim() // ello World
    return slicedWord + Chrs
}

console.log(shift('foobar', 3))


// Amazing bongo drums for sale -> ['#amazing', '#bongo', '#drums']
function makeHashTag(str) {
    const lowerWords = str.toLowerCase()
    const splitWords = lowerWords.split(' ')
    const wordsList = []
    if (splitWords.length > 3) {
        const sortedArr = splitWords.sort((a, b) => b.length - a.length); // descending order [#amazzing, #bongo, #drums, #sale, #for]
        const threeWords = sortedArr.slice(0, 3)
        for (word of threeWords) {
            const poundedWord = '#'.concat(word)
            wordsList.push(poundedWord)
        }
    }
    else {
        for (word of splitWords) {
            const poundedWord = '#'.concat(word)
            wordsList.push(poundedWord)
        }
    }

    return wordsList
}
console.log(makeHashTag('Amazing bongo drums zaswefaw for sale'))

// Abc def -> isEmpty("Abc def") // false
function isEmpty(str) {
    const trimmedWords = str.trim() // '   abc \t def '
    if (trimmedWords.length === 0) {
        return true
    }
    const splitChrs = trimmedWords.split('')
    for (chr of splitChrs) {
        if ( chr !== ' ' || chr !== '\n', chr !== '\t'  ) {
            return false
        }
        return true
    }
}

console.log(isEmpty(' \tAbc def'))

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty

