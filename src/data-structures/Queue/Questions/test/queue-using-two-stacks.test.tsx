import { queueUsingTwoStacks } from "../queue-using-two-stacks";

describe("queue-using-two-stacks", () => {
  let input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;
  it("", async () => {
    let result = await queueUsingTwoStacks(input);
    console.log(result);
    expect(result).toBe("14 14 ");
  });
});
