{
  /**
   * 상속
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

    constructor(coffeeBeans: number) {
      this.cooffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.cooffeeBeans += beans;
    }

    clean() {
      console.log(`cleaning the machine`);
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

  class coffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly seriaNumber: string) {
      super(coffeeBeans); //자식클래스에서 또 다른 인자를 받아오려면 super를 꼭 호출해야함
      // 부모클래스에서 필요한 인자값도 받아와야함
    }
    private steamMilk(): void {
      console.log(`Steaming some milk...`);
    }
    makeCoffee(shots: number): CoffeeCup {
      // overwriting
      const coffee = super.makeCoffee(shots); //super을 이용해서 부모클래스의 함수 호출, 접근
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }
  const machine = new CoffeeMachine(23);
  const latteMachine = new coffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.seriaNumber);
}
