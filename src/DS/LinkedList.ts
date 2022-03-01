export class Node {
  data: any;
  next: Node | null;
  constructor(data: any, next: any = null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList {
  head: Node | null;
  tail: Node;
  length: number;
  currentNode: any;
  constructor() {
    // first element in linked list
    this.head = null;
    // last element in linked list
    this.tail = { data: null, next: null };
    this.length = 0;
  }
  // insert Node at beginning of LinkedList

  prepend(value: any): any {
    // make new Node object
    const newNode = new Node(value, this.head);
    // if is first Node in LinkedList insert new Node in head
    this.head = newNode;
    // insert new Node at the end of LinkedList
    if (!this.tail) {
      this.tail = newNode;
    }
    // set tail as last Node
    this.length++;
    return this;
  }
  // insert Node at the end of LinkedList
  append(value: any): any {
    // make new Node object with next Node of head
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    // if is first Node in LinkedList set tail as newNode
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
  // insert Node at the given index of LinkedList
  insert(value: any, index: number): any {
    index = index < 0 ? 0 : index ?? 0;
    // if index is first Node
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let count = 1;
    let currentNode: Node | null = this.head;
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
      this.append(value);
    }
  }
  // delete Node from LinkedList with value
  delete(value: any): any {
    // if is empty LinkedList
    if (!this.head) return;

    // if is first value of LinkedList
    if (this.head.data === value) {
      return this.deleteHead();
    }
    // if delete value is at last Node

    let currentNode = this.head;
    let head = null;
    while (currentNode.next) {
      // if next value is equls to delete value remove Node from LinkedList
      if (currentNode.next.data === value) {
        head = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.length--;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.tail?.data === value) {
      this.tail = currentNode;
      head = this.currentNode;
    }
    return head;
  }
  // delete Node from LinkedList with index
  deleteAt(index: number): any {
    if (!this.head) return;
    // if index is First Node
    if (index === 0) {
      return this.deleteHead();
    }

    let currentNode = this.head;
    let count = 1;
    let head = null;
    // Traverse LinkedList at index
    while (currentNode.next) {
      // if next Node is equls to delete index remove Node from LinkedList
      if (count === index) {
        head = currentNode.next;
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

    return head;
  }
  // delete first Node from LinkedList
  deleteHead(): any {
    if (!this.head) {
      return;
    }
    let head = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.length--;
      return head;
    }
    this.head = null;

    return head;
  }
  // delete last Node from LinkedList
  deleteTail(): any {
    if (!this.head) {
      return;
    }
    let tail = null;
    // if head is tail delete LinkedList
    if (this.head === this.tail) {
      tail = this.head;
      this.head = null;
      this.tail = { data: null, next: null };
      return tail;
    }
    let currentNode = this.head;
    // Traverse till second last and delete last
    while (currentNode.next) {
      // if next of next of currentNode is null
      if (!currentNode.next.next) {
        tail = currentNode.next;
        currentNode.next = null;
      }
      // if next of next of currentNode is not null
      else {
        tail = currentNode;
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    this.length--;

    return tail || { data: null, next: null };
  }
  at(index: number): any {
    if (!this.head) return;
    if (index === 0) return this.head;
    let currentNode: Node | null = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) return currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (!currentNode) return { data: null, next: null };
  }
  find(value: any): any {
    if (!this.head) return;
    if (this.head.data === value) return this.head;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.data === value) return currentNode;
    }
    return { data: null, next: null };
  }
}
