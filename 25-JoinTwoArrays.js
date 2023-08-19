/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const obj = {}
  const arrs = [...arr1, ...arr2]
  arrs.forEach((item, idx) => (
      obj[arrs[idx].id] = { ...obj[arrs[idx].id], ...arrs[idx] }
  ))
  return Object.values(obj)
};