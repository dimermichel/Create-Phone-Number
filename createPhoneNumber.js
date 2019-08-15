function createPhoneNumber (numbers) {
  let numToStr = numbers.join('').toString()
  let subStr1 = numToStr.substring(0, 3)
  let subStr2 = numToStr.substring(3, 6)
  let subStr3 = numToStr.substring(6)
  return `(${subStr1}) ${subStr2}-${subStr3}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
