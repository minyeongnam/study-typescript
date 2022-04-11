{
  /**
   * 다형성
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // abstract class로 만들어진 클래스는 이 자체로는 오브젝트를 생성할 수 없고 추상적인 클래스다.
    // 공통적인 기능들은 구현할 수 있고 구현하는 클래스마다 달라져야되는 내용이 있다면 그 부분만 abstract 메소드로 정의를 할 수가 있다.
    // interface에서 함수의 규격을 정의한 것 처럼 abstract 메소드는 함수 이름, 인자, 리턴값만 정의할 수 있다.
    // 공통적인 기능들은 내부에서 필요한건 private, 외부에서 호출 가능한건 public,
    // abstract을 구현하는 곳에서 쓰일때 protected, abstract calss를 상속하면서 abstract 메소드를 구현하지 않으면 에러가 난다.
    // 깊은 상속보단 컴포지션, 그렇다고해서 상속을 기피할 필요는 없음
    private static BEANS_GRAMM_PER_SHOT = 7;
    private cooffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.cooffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup; //추상적인 함수기때문에 abstract을 구현하는 함수에서 따로 구현해 줘야함

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();

      return this.extract(shots);
    }
  }

  class CoffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly seriaNumber: string) {
      super(coffeeBeans); //자식클래스에서 또 다른 인자를 받아오려면 super를 꼭 호출해야함
      // 부모클래스에서 필요한 인자값도 받아와야함
    }
    private steamMilk(): void {
      console.log(`Steaming some milk...`);
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machine: CoffeeMaker[] = [
    new CoffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CoffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machine.forEach((machine) => {
    console.log("----------------");
    machine.makeCoffee(1);
  });
}
