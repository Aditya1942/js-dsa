import { Queue } from "../Queue";

describe("Queue", () => {
  let queue: Queue<number>;
  beforeEach(() => {
    queue = new Queue<number>();
  });
  it("Queue Peek", () => {
    expect(queue.peek()).toBe(undefined);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });
  it("Queue Enqueue", () => {
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
  });
  it("Queue Dequeue", () => {
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });
  it("Queue IsEmpty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
  it("Queue ToString", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.toString()).toBe("2=>1");
  });
  it("Queue AlL methods Test", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(null);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.toString()).toBe("5=>4=>3=>2=>1");
  });
});
