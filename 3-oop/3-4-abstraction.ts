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

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number, temperature: "hot" | "ice"): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

  const maker = new CoffeeMachine(10);
  // console.log(maker);
  maker.fillCoffeeBeans(10);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32); // maker2의 타입을 지정함으로서 makeMachine으로 인해 CoffeeMachine을 받아왔지만 Commercial...을 따라야 한다는 의미
  // console.log(maker2)
  // maker2.makeCoffee(2, 'hot');

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2, "ice");
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2, "hot");
      console.log(coffee);
      this.machine.fillCoffeeBeans(2);
      this.machine.clean();
    }
  }

  const amateur = new AmateurUser(maker);
  const prouser = new ProBarista(maker);

  amateur.makeCoffee();
  prouser.makeCoffee();
}