/**
 * Let's make a calculator 🧮
 */

type Command = "add" | "subtract" | "multiply" | "divide" | "remainder";

const calculate = (
  command: Command,
  firstNum: number,
  secondNum: number
): number | string => {
  switch (command) {
    case "add":
      return firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    case "divide":
      return firstNum / secondNum;
    case "remainder":
      return firstNum % secondNum;
    default:
      throw Error("unknow command");
  }
};
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
