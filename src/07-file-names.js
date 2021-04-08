/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counts = {};
  const resultCounts = {};

  return names.reduce((out, item) => {
    counts[item] = (counts[item]) ? counts[item] + 1 : 1;

    const resultName = (resultCounts[item] && /[()]/.test(item))
      ? `${item}(${counts[item]})`
      : `${item}${(counts[item] > 1) ? `(${counts[item] - 1})` : ''}`;

    out.push(resultName);
    resultCounts[resultName] = (resultCounts[resultName]) ? resultCounts[resultName] + 1 : 1;

    return out;
  }, []);
}

module.exports = renameFiles;
