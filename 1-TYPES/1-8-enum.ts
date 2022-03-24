{
  /**
   * Enum
   */
  // JavaScript

  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  enum Days { // enum은 파스칼케이스로 작성 // 값을 입력하지 않으면 0부터 할당 됨
    Monday,
    Tuesday,
    Wednesday,
  }

  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  day = Days.Tuesday;
  day = 10; // 컴파일 에러가 나지 않음.
  console.log(day);

  // typescript에서 enum의 문제점
  // enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당 할 수 있는 문제가 있다.
  // enum 을 쓰면 타입이 제대로 보장되지 않음.
  // enum을 쓰지 않고 union type을 활용 할 수 있다.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  // dayOfWeek = 'ellie' // error

  // enum은 유니언타입의 스트링 리터럴로 대체하여 사용가능
  // enum을 쓸수밖에 없는 경우 - 모바일 클라이언트에서 사용(유니언 타입을 사용할 수 없기때문에)
}
