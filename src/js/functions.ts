function fun1(): any {
  console.log("fun1");
}
function fun2(params: any): any {
  console.log(params);
}
const fun3 = () => {
  console.log("fun3");
};
const fun4 = (params: any) => {
  console.log(params);
};
function fun5(): Function {
  return fun1;
}
function fun6(functionParam: Function) {
  functionParam();
}
const fun7 = () => {
  return (params: any) => {
    console.log(params);
  };
};
fun7()("hello");
