export default function main() {
  const cart = [1, 2, 3];

  const callback = (result: any) => {
    console.log("callback", result);
  };

  const sum = (cb: Function) => {
    const result = cart.reduce((acc, cur) => {
      return (acc = acc + cur);
    }, 0);
    cb(result);
  };

  sum(callback);
  sum((result: any) => {
    console.log("callback", result);
  });
}
