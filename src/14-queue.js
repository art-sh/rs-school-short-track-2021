const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
  }

  get size() {
    const getLength = (node, count = 0) => ((node.next) ? getLength(node.next, count + 1) : count);

    return getLength(this.first);
  }

  enqueue(element) {
    const newNode = new ListNode(element);

    if (!this.first) {
      this.first = newNode;
    } else {
      const lastNode = this.getNodeByIndex(this.size);
      lastNode.next = newNode;
    }
  }

  dequeue() {
    const firstNode = this.first;
    this.first = this.first.next;

    return firstNode.value;
  }

  getNodeByIndex(index) {
    const getNextNode = (node, needle, needleIndex = 0) => {
      if (needle < needleIndex || node === undefined) return null;

      return (needleIndex === needle) ? node : getNextNode(node.next, needle, needleIndex + 1);
    };

    return getNextNode(this.first, index);
  }
}

module.exports = Queue;
