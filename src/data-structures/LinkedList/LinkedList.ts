import {
  LinkedListInterface,
  LinkedListNodeInterface,
} from "../../interface/LinkedList.model";

export class LinkedListNode implements LinkedListNodeInterface {
  data: any;
  next: LinkedListNode | null;
  constructor(data: any, next: any = null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList implements LinkedListInterface {
  head: LinkedListNode | null; // Head
  tail: LinkedListNode | null; // Tail
  length: number = 0; // length of linked list
  constructor() {
    this.head = null; // first element in linked list

    this.tail = null; // last element in linked list
    this.length = 0;
  }
  // insert Node at beginning of LinkedList
  prepend(value: any): any {
    // make new Node object

    const newNode = new LinkedListNode(value, this.head);
    // if is first Node in LinkedList insert new Node in head
    this.head = newNode;
    // insert new Node at the end of LinkedList
    if (this.tail?.data !== null) {
      this.tail = newNode;
    }
    // set tail as last Node
    this.length++;
    return newNode;
  }
  // insert Node at the end of LinkedList
  append(value: any): any {
    let newNode = new LinkedListNode(value);
    //  if is first node in LinkedList insert new Node in head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // if is not first node in LinkedList insert new Node in tail
    else {
      if (this.tail !== null) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  // insert Node at the given index of LinkedList
  insert(value: any, index: number): any {
    index = index < 0 ? 0 : index ?? 0;
    // if index is first Node
    if (index === 0) {
      return this.prepend(value);
    }
    let count = 1;
    let currentNode: LinkedListNode | null = this.head;
    const newNode = new LinkedListNode(value);
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
      return newNode;
    }
    // if index if out of LinkedList insert Node at the end
    return this.append(value);
  }
  // delete Node from LinkedList with value
  delete(value: any): any {
    // if is empty LinkedList
    if (!this.head) return;

    // if is first value of LinkedList
    if (this.head.data === value) {
      return this.deleteAt(0);
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
      head = currentNode;
    }
    return head;
  }
  // delete Node from LinkedList with index
  deleteAt(index: number): any {
    if (!this.head) {
      return;
    }
    // Check if index is present in list
    if (index < 0 || index >= this.length) {
      return null;
    }
    // if removing first Node
    if (index === 0) {
      if (this.length === 1) {
        let node = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }
      let node = this.head;
      this.head = this.head.next;
      this.length--;
      return node;
    }
    let count = 1;
    let currentNode = this.head;
    let node = null;
    // find Node in with index
    while (currentNode.next) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }
    // if index is in between the LinkedList
    if (currentNode.next) {
      node = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.length--;
      return node;
    }
    // if removing last Node
    if (this.tail?.data === currentNode.data) {
      this.tail = currentNode;
      node = currentNode;
    }
    return node;
  }
  // delete first Node from LinkedList
  deleteHead(): any {
    return this.deleteAt(0);
  }
  // delete last Node from LinkedList
  deleteTail(): any {
    return this.deleteAt(this.length - 1);
  }
  // get Node from LinkedList with index
  at(index: number): any {
    if (!this.head) return;
    if (index === 0) return this.head;
    let currentNode: LinkedListNode | null = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) return currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (!currentNode) return { data: null, next: null };
  }
  // get Node from LinkedList with value
  find(value: any): any {
    if (!this.head) return;
    if (this.head.data === value) return this.head;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.data === value) return currentNode;
    }
    return null;
  }
  // get array of LinkedList
  toArray(): string[] {
    let List: string[] = [];
    let currentNode = this.head;
    while (currentNode) {
      List.push(currentNode.data ?? null);
      currentNode = currentNode.next;
    }
    return List;
  }

  // Check if list is empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // get String representation of LinkedList
  toString(): string {
    let LinkedListString = "";
    let List: any[] = [];
    let currentNode = this.head;
    while (currentNode) {
      List.push(currentNode.data ?? null);
      currentNode = currentNode.next;
    }
    LinkedListString = List.join("=>");
    return LinkedListString || "";
  }
  // Get the size of the list
  size(): number {
    return this.length;
  }
  // Get the head
  getHead(): LinkedListNode | null {
    return this.head;
  }

  // Get the tail
  getTail(): LinkedListNode | null {
    return this.tail;
  }
}
