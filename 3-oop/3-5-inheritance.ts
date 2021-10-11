import { log } from "console";


{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 0;

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
    

    protected extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      return this.extract(shots);
    }

    clean() {
      console.log("Cleaning the machine..");
    }
  }

  class CaffelatteMachine extends CoffeeMachine{
    constructor(coffeeBeans:number, public readonly serialNum: string){
      super(coffeeBeans);
    }

    private steamingMilk(){
      console.log('Steaming Milk...')
    }

    makeCoffee(shots: number):CoffeeCup{
      const coffee =  super.makeCoffee(shots);
      this.steamingMilk();
      return {shots, hasMilk: true}
    }
  }

  const latteMachine = new CaffelatteMachine(32, 'SSSS');
  console.log(latteMachine)
  console.log('-----------------')
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee); // ---> return 값 출력
  console.log(latteMachine.serialNum);