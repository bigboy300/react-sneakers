function toCamelCase(str) {
  const regExp = /\*|_|-|\$/g
  const words = str.split(regExp)
  const aboba = words.map((word, index) => {
    if (index === 0) {
      return word
    }
    return word[0].toUpperCase + word.slice(1)
  })
  return aboba.join('')
}
console.log(toCamelCase('The_stealth-warrior'))
