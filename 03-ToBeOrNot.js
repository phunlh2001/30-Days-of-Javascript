/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe(x) {
          if (val !== x) throw "Not Equal"
          return true
      },

      notToBe(x) {
          if (val === x) throw "Equal"
          return true
      }
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/