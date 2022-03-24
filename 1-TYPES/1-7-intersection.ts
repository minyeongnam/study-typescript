{
  /**
   * Intersection Type: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeid: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeid, person.work());
  }

  internWork({
    // 모든 타입을 입력해야됨
    name: "ellie",
    score: 1,
    empolyeeid: 123,
    work: () => {},
  });
}
