/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
      let ans = []
      let len = functions.length

      functions.forEach((func, index) => {
          func().then(res => {
              ans[index] = res
              return --len === 0 && resolve(ans)
          }).catch(reject)
      })
  })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/