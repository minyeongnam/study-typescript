{
  /**
   * 캡슐화 시켜보기
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public - 기본, 공개적으로 설정
  // private - 외부에서 직접 설정 불가능
  // protected - 상속을 할때 외부에선 접근 불가능, 이 클래스를 상속한 자식 클래스에서만 접근할 수 있음.
  class coffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level // class level에서 공유됨
    private cooffeeBeans: number = 0; // instance (object) level // class가 만들어질때마다 생성됨 //멤버 변수

    // 외부에서 coffeeBeans, BEANS_GRAMM_PER_SHOT를 직접설정 하지 못하도록 private 숨김

    private constructor(coffeeBeans: number) {
      // 항상 처음에 호출되는 함수
      this.cooffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): coffeeMaker {
      // static을 붙여 object를 만드는 함수를 제공한다는건 누군가가 생성자를 이용해서 생성하는것을 금지, constructor 에 private 추가

      // 이 클래스 내부에 있는 어떠한 속성값도 필요치 않기때문에 static를 붙여줘도 된다.
      return new coffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //외부에서 fillCoffeeBeans함수를 이용해서 내부변수에 접근하도록 함, 유효성 검사가 가능
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.cooffeeBeans += beans;
    }

    makeCooffee(shots: number): CoffeeCup {
      if (this.cooffeeBeans < shots * coffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // coffeeMaker.BEANS_GRAMM_PER_SHOT class레벨로 접근해야함
        throw new Error("Not enough coffee beans!");
      }
      this.cooffeeBeans -= shots * coffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new coffeeMaker(32); // private constructor
  const maker = coffeeMaker.makeMachine(32);
  // maker.cooffeeBeans = 3;
  // maker.cooffeeBeans = -32; // 외부에서 유효하지 않은 값 설정 가능한 위험한 상황
  maker.fillCoffeeBeans(3);

  /**
   * gatter, setter
   */

  class User {
    /* firstName: string;
    lastName: string; 
    fullName: string;*/

    get fullName(): string {
      //멤버 변수처럼 접근 가능
      // fullName에 접근할때마다 새로운 데이터를 만들고 개선할 수 있다.
      return `${this.firstName} ${this.lastName}`; // 호출한 시점에 결합
    }
    private internalAge = 4;
    get age(): number {
      //getter, setter로 변수지만 계산이 가능
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("error"); // 유효성 검사가 가능
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  //user.firstName = "Ellie";
  console.log(user.fullName); // Steve Jobs, 생성시점에 fullName이 할당되어 firstName을 바꿔도 재할당 되지 않음.
  user.age = 6;
  console.log(user.age);
}
