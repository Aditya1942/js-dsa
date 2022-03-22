import { StackWithArray } from "../StackWithArray";

describe("StackWithArray", () => {
  let stack: StackWithArray<number>;
  beforeEach(() => {
    stack = new StackWithArray<number>();
  });
  it("isEmpty", () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it("Push", () => {
    expect(stack.push(1)).toBe(1);
    expect(stack.push(2)).toBe(2);
    expect(stack.push(3)).toBe(3);
  });
  it("Pop", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(null);
  });
  it("Peek", () => {
    expect(stack.peek()).toBe(null);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });
  it("toArray", () => {
    expect(stack.toArray()).toEqual([]);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
  it("toString", () => {
    expect(stack.toString()).toBe("");
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toBe("3=>2=>1");
  });
  it("Stack Full Test", () => {
    expect(stack.peek()).toBe(null);
    expect(stack.toString()).toBe("");
    expect(stack.toArray()).toEqual([]);
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.toString()).toBe("1");
    expect(stack.toArray()).toEqual([1]);
    expect(stack.isEmpty()).toBe(false);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.toString()).toBe("2=>1");
    expect(stack.toArray()).toEqual([2, 1]);
    expect(stack.isEmpty()).toBe(false);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.toString()).toBe("3=>2=>1");
    expect(stack.toArray()).toEqual([3, 2, 1]);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.peek()).toBe(2);
    expect(stack.toString()).toBe("2=>1");
    expect(stack.toArray()).toEqual([2, 1]);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.peek()).toBe(1);
    expect(stack.toString()).toBe("1");
    expect(stack.toArray()).toEqual([1]);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.peek()).toBe(null);
    expect(stack.toString()).toBe("");
    expect(stack.toArray()).toEqual([]);
    expect(stack.isEmpty()).toBe(true);
  });
});
