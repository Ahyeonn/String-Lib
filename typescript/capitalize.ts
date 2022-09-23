function capitalize(str: string): string {
    // If empty string, return empty string
    if (str.length === 0) {
        return str
    }
    // First Character
    const firstChr: string = str[0]
    // Change the first character to upper case
    const upperCase: string = firstChr.toUpperCase()
    // All the letters other than the first letter
    const otherChrs: string = str.slice(1)

    return upperCase+otherChrs
}

// console.log(capitalize('hello'))

export {
	capitalize
}