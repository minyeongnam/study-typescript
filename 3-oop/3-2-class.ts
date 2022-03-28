{
  /**
   * 절차지향적으로 커피기계 만들기
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class coffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; // class level // class level에서 공유됨
    cooffeeBeans: number = 0; // instance (object) level // class가 만들어질때마다 생성됨 //멤버 변수

    constructor(coffeeBeans: number) {
      // 항상 처음에 호출되는 함수
      this.cooffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): coffeeMaker {
      // 이 클래스 내부에 있는 어떠한 속성값도 필요치 않기때문에 static를 붙여줘도 된다.
      return new coffeeMaker(coffeeBeans);
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

  const maker = new coffeeMaker(32);
  console.log(maker); // coffeeMaker { BEANS_GRAMM_PER_SHOT: 7, cooffeeBeans: 32 }
  const maker2 = new coffeeMaker(14);
  console.log(maker2); //coffeeMaker { cooffeeBeans: 14 } // BEANS_GRAMM_PER_SHOT가 static가 되었기 때문에 cooffeeBans만 출력

  const make3 = coffeeMaker.makeMachine(3);
  console.log(make3); //coffeeMaker { cooffeeBeans: 3 }

  //static ex: Math는 class level이기 때문에 object를 생성하지 않고도 class level에서 함수를 호출할 수 있음.
}
