{
  /**
   * 추상화
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private cooffeeBeans: number = 0;

    // 외부에서 coffeeBeans, BEANS_GRAMM_PER_SHOT를 직접설정 하지 못하도록 private 숨김

    private constructor(coffeeBeans: number) {
      // 항상 처음에 호출되는 함수
      this.cooffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      // static을 붙여 object를 만드는 함수를 제공한다는건 누군가가 생성자를 이용해서 생성하는것을 금지, constructor 에 private 추가

      // 이 클래스 내부에 있는 어떠한 속성값도 필요치 않기때문에 static를 붙여줘도 된다.
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //외부에서 fillCoffeeBeans함수를 이용해서 내부변수에 접근하도록 함, 유효성 검사가 가능
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.cooffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.cooffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.cooffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();

      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(3);
  maker.makeCoffee(2);
  // 추상화: 정말 필요한 함수만 노출해서 양식을 좀 더 간단하고 심플하게 만드는 것

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  //maker2.fillCoffeeBeans(3); //error: CoffeeMaker interface에 정의된것이 없음.
  maker2.makeCoffee(2);
}
