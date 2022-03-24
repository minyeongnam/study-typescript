{
  /**
   * Type Assertions 💩
   */
  // 타입스크립트는 자바스크립트와 연동되는 경우가 있기때문에 type assertions을 쓰게 된다.
  // Type Assertions 은 100% 타입을 장담할때만 사용가능

  function jsStrFunc(): any {
    // return "hello";]
    return 2; // 코드 작성 시점에서는 에러는 나지 않으나 컴파일 시점에서 에러발생
  }
  const result = jsStrFunc();
  console.log((result as string).length); //5
  console.log((<string>result).length); //5

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😨  error발생 및 어플리케이션 종료됨

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers!.push(2); // 😨 진짜 진짜 장담, 무조건 null이 아님 숫자배열만 받을꺼야 undifined가 될 수 없다고 할때

  const button = document.querySelector("class"); // button | null
  if (button) {
    button.nodeValue;
  }

  const button2 = document.querySelector("class")!;
}
