/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  return this.reduce((res, item) => {
      const key = fn(item)
      if (!(key in res)) res[key] = []
      res[key].push(item)
      return res
  }, {})
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/