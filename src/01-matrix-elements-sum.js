/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columns = matrix[0].map((number, index) => {
    const column = [];

    for (let row = 0; row < matrix.length; row++) {
      column.push(matrix[row][index]);
    }

    return column;
  });

  return columns.reduce((sum, column) => sum + column.reduce((columnSum, number, index, array) => {
    const zeroIndex = array.findIndex((item) => item === 0);

    return (zeroIndex === -1 || zeroIndex > index) ? columnSum + number : columnSum;
  }, 0), 0);
}

module.exports = getMatrixElementsSum;
