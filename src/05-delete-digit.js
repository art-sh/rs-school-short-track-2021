/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const collection = n.toString().split('').map((number, index, array) => {
    const cloned = [...array];
    cloned.splice(index, 1);

    return +cloned.join('');
  });

  return Math.max(...collection);
}

module.exports = deleteDigit;
