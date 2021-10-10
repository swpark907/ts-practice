import { log } from "console";


{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    temperature: "hot" | "ice";
  };

  interface CoffeeMaker {
    makeCoffee(shots: number, temperature: "hot" | "ice"): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 0;
    private temperature: string = "hot";

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      if (shots > 0) {
        console.log(`Grinding beans for ${shots} shots`);
      }
    }
    private preheat(temperatuer: "hot" | "ice") {
      if (temperatuer === "hot") {
        console.log("Heating water..");
      }
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
        temperature: "hot",
      };
    }

    makeCoffee(shots: number, temperature: "hot" | "ice"): CoffeeCup {
      this.grindBeans(shots);
      this.preheat(temperature);
      return this.extract(shots);
      // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
      //     throw new Error('Not enough coffee beans!!');
      // }
      // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      //
    }

    clean() {
      console.log("Cleaning the machine..");
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log("Steaming milk..");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots, "hot");
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}