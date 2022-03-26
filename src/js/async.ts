const random = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};
const timer = (sec: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sec);
    }, sec * 1000);
  });
};
const loop = async (
  startRange: number,
  endRange: number,
  callback: Function
) => {
  for (let i = startRange; i <= endRange; i++) {
    callback(i);
    await timer(1);
  }
};
const infiniteLoop = async (callback: Function) => {
  let count = 0;
  while (true) {
    callback(count);
    count += 1;
    await timer(1);
  }
};
const loopForEach = async (array: any[], callback: Function) => {
  for (const iterator of array) {
    callback(iterator);
    await timer(1);
  }
};

export const main = async () => {
  let result = await random();
  console.log({ result });
  let result1 = await random();
  console.log({ result1 });
  let result2 = await random();
  console.log({ result2 });
  let result3 = ["a", "b", "c", "d"];

  loopForEach(await result3, (i: any) => {
    console.log("loop ", i);
  });
  loop(0, 5, (i: any) => {
    console.log("loop ", i);
  });
  infiniteLoop((i: number) => {
    console.log("infiniteLoop", i);
  });
};
