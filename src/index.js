module.exports = function reverse (n) {
  let num = Math.abs(n)
  let string = num.toString() 
  let array = string.split('') 
  let result = array.reverse()  
  let string1 = result.join('')
  let res = Number(string1)
  return res;
}
