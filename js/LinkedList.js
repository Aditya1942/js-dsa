class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
export class LinkedList {
  constructor(value) {
    // first element in linked list
    this.head = null;
    // last element in linked list
    this.tail = null;
    this.length = 0;
  }
  // insert Node at the end of LinkedList
  prepend(value) {
    // make new Node object
    let newNode = new Node(value);
    // if is first Node in LinkedList insert new Node in head
    if (!this.head) {
      this.head = newNode;
    }
    // insert new Node at the end of LinkedList
    else {
      this.tail.next = newNode;
    }
    // set tail as last Node
    this.tail = newNode;
    this.length++;
  }
  // insert Node at beginning of LinkedList
  append(value) {
    // make new Node object with next Node of head
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    // if is first Node in LinkedList set tail as newNode
    if (!this.tail) {
      this.tail = newNode;
    }
  }
  // insert Node at the given index of LinkedList
  insert(value, index) {
    index = index < 0 ? 0 : index ?? 0;
    // if index is first Node
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let count = 1;
    let currentNode = this.head;
    const newNode = new Node(value);
    // find Node in with index
    while (currentNode) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }
    // if index is in between the LinkedList
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
    // if index if out of LinkedList insert Node at the end
    else {
      this.prepend(value);
    }
  }
  // delete Node from LinkedList with value
  delete(value) {
    // if is empty LinkedList
    if (!this.head) return;

    // if is first value of LinkedList
    if (this.head.data === value) {
      this.deleteHead();
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      // if next value is equls to delete value remove Node from LinkedList
      if (currentNode.next.data === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    // if delete value is at last Node
    if (this.tail.data === value) {
      this.tail = currentNode;
    }
  }
  // delete Node from LinkedList with index
  deleteAt(index) {
    if (!this.head) return;
    // if index is First Node
    if (index === 0) {
      this.deleteHead();
      return;
    }

    let currentNode = this.head;
    let count = 1;
    // Traverse LinkedList at index
    while (currentNode.next) {
      // if next Node is equls to delete index remove Node from LinkedList
      if (count === index) {
        currentNode.next = currentNode.next.next;
        this.length--;
        break;
      }
      count++;
      currentNode = currentNode.next;
    }
    // if delete value is at last Node
    if (currentNode.next === null) {
      this.tail = currentNode;
    }
  }
  // delete first Node from LinkedList
  deleteHead() {
    if (!this.head) {
      return;
    }
    if (this.head.next) {
      this.head = this.head.next;
      this.length--;
    }
  }
  // delete last Node from LinkedList
  deleteTail() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.length--;
    this.tail = currentNode;
  }
}
