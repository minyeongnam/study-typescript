{
  /**
   * 절차지향적으로 커피기계 만들기
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT = 7;

  let cooffeeBeans: number = 0;

  function makeCooffee(shots: number): CoffeeCup {
    if (cooffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    cooffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  cooffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCooffee(2);
  console.log(coffee);
}
