/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const findInHalf = (arrayToSearch, valueToSearch, indexStart = 0, indexEnd = 0) => {
    const indexLast = indexEnd || arrayToSearch.length - 1;
    const indexMiddle = Math.floor((indexLast - indexStart) / 2) + indexStart;
    const itemInMiddle = arrayToSearch[indexMiddle];

    if (valueToSearch === itemInMiddle) return indexMiddle;

    return (valueToSearch < itemInMiddle)
      ? findInHalf(arrayToSearch, valueToSearch, indexStart, indexMiddle)
      : findInHalf(arrayToSearch, valueToSearch, indexMiddle + 1, indexLast);
  };

  return findInHalf(array, value);
}

module.exports = findIndex;
