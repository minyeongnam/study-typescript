{
  // javaScript

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  // age = 5; // error

  /**
   * javascript
   * primitive: number, stringm, boolean, bigint, symbol, null, undefined... // 원시타입
   * Object: function, array...
   */

  // number
  const num: number = -6;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name2: undefined; // error
  let age2: number | undefined; // 옵셔널 타입일때 선언

  age2 = 1;
  age2 = undefined;

  function find(): number | undefined {
    return undefined;
  }

  // null: 비었다고 이미 결정 됨
  let person: null;
  let person2: string | null; // 값이 있거나 없는것을 판단할때

  //unknown - 안쓰는게 좋은, js와 연동할때 필요
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any - 안쓰는게 좋은
  let anything: any = 0;
  anything = "hello";

  // void - 함수에서 아무것도 리턴하지 않을때
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // 변수에는 할당하지 않음

  // naver - 에러에 사용,
  function throwError(message: string): naver {
    //message - >server (log)
    throw new Error(message);
    let naverEnding: naver; // 똥
  }

  // object
  let obj: object; // 사용하지 않음 - 타입 정확하게 명시
  function acceptSomeObject(obj: object) {}
}
