{
  // Array
  const fruits: string[] = ["사과", "바나나"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push("감") // error : readonly로 데이터 변경 불가
  }

  // Tuple - 권장하지 않는 방법
  // interface, type alias, class 로 대체하여 사용
  // react: useState에서 사용 - 튜플을 잘 사용한 예
  // 동적으로 사용자가 선언해서 사용해야되는 경우는 유용하지만 그 외에는 대체해서 사용할 것
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
}
