{
  /**
   * Type Aliases - 새로운 타입 정의
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Number = number;
  type Student = {
    name: string;
    age: number;
  };
  const sudent: Student = {
    name: "ellie",
    age: 12,
    // animal: 'cat' //error - Student type에서 지정한것만 가능
  };

  /**
   * String Literal Types - 문자로 넣을수 있음.
   */

  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  //ellieName = "ellie"; // error - name으로 할당되었기 때문에 name만 쓸 수 있음

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  //const isCat: Boal = false; //error - true만 할당 가능
}
