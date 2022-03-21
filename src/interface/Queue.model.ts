export interface QueueInterface<Type> {
  isEmpty(): boolean;
  peek(): Type;
  enqueue(data: Type): Type;
  dequeue(): Type | null;
  toString(): string;
}
