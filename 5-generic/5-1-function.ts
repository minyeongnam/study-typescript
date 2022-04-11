{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(231);
  const boal: boolean = checkNotNull(true);
  //const boal: string = checkNotNull(true); // error

  // 제네릭을 이용하면 사용하는 사람이 어떤 타입인지 결정 가능
  // 유연하지만 타입을 보장 받을 수 있음
}
