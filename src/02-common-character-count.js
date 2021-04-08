/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const calcCountByLetters = (string) => string.split('').reduce((out, letter) => {
    const counts = out;

    if (!out[letter]) {
      counts[letter] = 1;
    } else {
      counts[letter] += 1;
    }

    return counts;
  }, {});
  const s1Counts = calcCountByLetters(s1);
  const s2Counts = calcCountByLetters(s2);

  return Object.entries(s1Counts).reduce((sum, letterInfo) => ((s2Counts[letterInfo[0]])
    ? sum + Math.min(letterInfo[1], s2Counts[letterInfo[0]])
    : sum), 0);
}

module.exports = getCommonCharacterCount;
