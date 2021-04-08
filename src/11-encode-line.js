/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;

  return str.split('').reduce((out, letter, index, array) => {
    const nextLetter = array[index + 1];
    counter += 1;

    if (letter !== nextLetter) {
      const counterBackup = counter;
      counter = 0;

      return `${out}${(counterBackup > 1) ? counterBackup : ''}${letter}`;
    }

    return out;
  }, '');
}

module.exports = encodeLine;
