/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains
    .reduce((collection, domain) => collection.concat(domain.split('.').reverse().reduce((out, item, index, array) => {
      out.push(`.${array.slice(0, index + 1).join('.')}`);

      return out;
    }, [])), [])
    .reduce((out, domain) => {
      const counts = { ...out };

      counts[domain] = (counts[domain] !== undefined) ? counts[domain] + 1 : 1;

      return counts;
    }, {});
}

module.exports = getDNSStats;
