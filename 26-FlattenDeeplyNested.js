/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr
  let ans = []
  arr.forEach(item => {
      if (Array.isArray(item)) ans.push(...flat(item, n-1))
      else ans.push(item)
  })
  return ans
};