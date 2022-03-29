// simple promise example
const oddEven = (number: any): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      resolve(number % 2 === 0);
    }
    reject("not a number");
  });
};
export const main = async () => {
  let result = await oddEven(2);
  let result2 = await Promise.all([oddEven(2), oddEven(3)]);
  let result3 = await Promise.any([oddEven("2"), oddEven(2)]);
  let result4 = await oddEven("2").then(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );

  console.log({ result, result2, result3, result4 });
};
