{
  /* // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id) {
    // code
    // code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function FetchNum(id: string): Promise<number> {
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } */

  // Optional parameter - 인자를 전달해도 되고 전달 안해도 됨
  // ?가 아닌 string | undifinded 일 경우 인자를 항상 개수에 맞춰 전달해야된다.
  function printName(first: string, last?: string) {
    console.log(first);
    console.log(last);
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter - 인자들을 배열타입으로 받아 올 수 있다.
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 0));
}
