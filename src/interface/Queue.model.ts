export interface QueueInterface<T> {
  isEmpty(): boolean;
  peek(): T;
  enqueue(data: T): T;
  dequeue(): T | null;
  toString(): string;
}
