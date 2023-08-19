Array.prototype.last = function() {
  let result = this.pop()
  if (result === undefined) return -1
  return result
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/