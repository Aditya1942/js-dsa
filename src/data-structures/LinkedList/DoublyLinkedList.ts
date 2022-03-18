import {
  DoublyLinkedListInterface,
  DoublyLinkedListNodeInterface,
} from "../../interface/DoublyLinkedList.model";

export class DoublyLinkedListNode implements DoublyLinkedListNodeInterface {
  data: any;
  next: DoublyLinkedListNode | null;
  previous: DoublyLinkedListNode | null;
  constructor(data: any, next: any = null, previous: any = null) {
    this.previous = previous;
    this.data = data;
    this.next = next;
  }
}
export class DoublyLinkedList implements DoublyLinkedListInterface {
  head: DoublyLinkedListNode | null; // Head
  tail: DoublyLinkedListNode | null; // Tail
  length: number = 0; // length of linked list
  constructor() {
    this.head = null; // first element in linked list
    this.tail = null; // last element in linked list
    this.length = 0;
  }

  at(index: number): any {
    if (!this.head) return;
    if (index === 0) return this.head;
    let currentNode: DoublyLinkedListNode | null = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) return currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (!currentNode) return { data: null, next: null };
  }
  find(data: any): any {
    if (!this.head) return;
    if (this.head.data === data) return this.head;

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.data === data) return currentNode;
    }
  }
  append(data: any): void {
    return this.insert(data, -1);
  }
  prepend(data: any): void {
    return this.insert(data, 0);
  }
  insert(data: any, index: number): void {
    let newNode = new DoublyLinkedListNode(data);

    // inserting Node at beginning
    if (!this.head) {
      this.head = newNode;
      if (this.tail?.data !== null) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }
    // inserting Node at end
    if (index === -1) {
      if (this.tail) this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      this.length++;
      return;
    }
    // inserting Node at beginning
    if (index === 0) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      if (this.tail?.data !== null) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }
    // inserting Node at somewhere middle
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode.next) {
      newNode.next = currentNode.next;
      newNode.previous = currentNode;
      currentNode.next = newNode;
      this.length++;

      return;
    }
    // inserting Node at end
    if (this.tail) this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;

    return;
  }
  delete(data: any): any {
    if (!this.head) return;
    let node = null;
    if (this.head.data === data) {
      node = this.head;
      if (!this.head.next) {
        this.head = null;
        this.tail = null;
      } else {
        if (this.head.next?.previous) this.head.next.previous = null;
        this.head = this.head.next;
      }

      this.length--;
      return node;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        node = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (currentNode.next?.previous) {
          currentNode.next.previous = currentNode;
        }
        this.length--;
      } else currentNode = currentNode.next;
    }
    if (this.tail?.data === data) {
      this.tail = currentNode;
      this.length--;
      node = currentNode;
    }
  }
  deleteAt(index: number): any {
    console.log(index);
    throw new Error("Method not implemented.");
  }
}
