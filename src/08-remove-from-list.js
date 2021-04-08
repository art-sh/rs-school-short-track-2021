/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const convertToArray = (list, out = []) => {
    out.push(list.value);

    return (list.next) ? convertToArray(list.next, out) : out;
  };
  const convertToList = (array) => {
    function ListNode(x) {
      this.value = x;
      this.next = null;
    }

    let first = null;
    let last = null;

    array.forEach((item) => {
      const newNode = new ListNode(item);

      if (!first) {
        first = newNode;
        last = newNode;
      } else {
        last.next = newNode;
        last = newNode;
      }
    });

    return first;
  };

  const filtered = convertToArray(l).filter((item) => item !== k);

  return convertToList(filtered);
}

module.exports = removeKFromList;
