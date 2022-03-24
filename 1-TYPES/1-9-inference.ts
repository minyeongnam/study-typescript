{
  /**
   * Type Inference
   */

  let text = "hello";
  // text = 1; // error // 문자열을 선언하면서 할당했기 때문에 타입스크립트가 스트링으로 추론함

  function print(message: string) {
    // 암묵적으로 any타입을 가지고있기때문에 명확하게 타입을 써주는게 좋다.
    console.log(message);
  }

  print("hello");
  // print(1); // error - string을 명확하게 써주고 나서야 에러가 남

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);

  // 타입 추론은 좋은건가?
  // 아니다. 로직이 어려워지면 추론이 정확하지 않다.
  // 원시타입은 너무 뻔하기 때문에 생략 가능하나
  // 함수에서는 return 타입을 적어주는 습관을 들이는게 좋다.
  // 타입 추론은 코딩 스타일에 따라 팀에서 합의하에 적는다.
}
