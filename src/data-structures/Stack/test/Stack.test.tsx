import { Stack } from "../Stack";

describe("Stack", () => {
  let stack: Stack<number>;
  beforeEach(() => {
    stack = new Stack<number>();
  });
  it("isEmpty", () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it.todo("Push");
  it.todo("Pop");
  it.todo("Peek");
  it.todo("toArray");
  it.todo("toString");
});
