/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const outField = [];
  const isBomb = (field, x, y) => field[y] !== undefined && field[y][x] === true;
  const checkNearCountBombs = (field, x, y) => {
    let sum = 0;

    sum += isBomb(field, x - 1, y);
    sum += isBomb(field, x - 1, y - 1);
    sum += isBomb(field, x - 1, y + 1);
    sum += isBomb(field, x + 1, y);
    sum += isBomb(field, x + 1, y - 1);
    sum += isBomb(field, x + 1, y + 1);
    sum += isBomb(field, x, y + 1);
    sum += isBomb(field, x, y - 1);

    return sum;
  };

  for (let row = 0; row < matrix.length; row++) {
    const fieldRow = [];

    for (let column = 0; column < matrix[row].length; column++) {
      fieldRow.push(checkNearCountBombs(matrix, column, row));
    }

    outField.push(fieldRow);
  }

  return outField;
}

module.exports = minesweeper;
