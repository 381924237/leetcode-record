/**
 * @param {string} str
 * @return {boolean}
 */

const isValid = function (str) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      if (!stack.length || map.get(str[i]) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return !stack.length;
};

console.log(isValid("()[]{}"));
