export default function main() {
  const arr: Array<number> = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const arr: Array<number> = [1, 2, 3];

  // sum
  const total = arr.reduce((acc: number, curr: number) => {
    return (acc = acc + curr);
  }, 0);

  // max/min
  const max = arr.reduce((acc: number, curr: number) => {
    return (acc = acc < curr ? curr : acc);
  });
  const min = arr.reduce((acc: number, curr: number) => {
    return (acc = acc > curr ? curr : acc);
  });
  // all
  const result = arr.reduce(
    (acc: any, curr: number) => {
      acc.sum = acc.sum + curr;
      acc.max = acc.max < curr ? curr : acc.max;
      acc.min = acc.min > curr ? curr : acc.min;
      return acc;
    },
    {
      sum: 0,
      max: arr[0],
      min: arr[0],
    }
  );

  console.log({ total });
  console.log({ max });
  console.log({ min });
  console.log(result);
}
