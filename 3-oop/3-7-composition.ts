{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    sugar?: boolean;
  };
  
  // SweetCaffeeLatte는 우유랑 설탕 둘다필요한데, 두가지 부모로부터 상속받을 수는 없음. 이럴 때 Composition
  // Composition: 기능별로 클래스를 만들어 필요한 곳에서 갖다 쓰는 것


  interface SugarMachine{
      addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface MilkSteamer{  
      makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  class CandySugarMachine implements SugarMachine{
    getSugar() {
      console.log("Getting Sugar from candy 🍬");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        sugar: sugar,
      };
    }
  }

  class NormalSugarMachine implements SugarMachine{
    getSugar() {
        console.log("Getting Sugar from jar!!!!!!");
        return true;
      }
  
      addSugar(cup: CoffeeCup): CoffeeCup {
        const sugar = this.getSugar();
        return {
          ...cup,
          sugar: sugar,
        };
      }
  }

  class NoSugar implements SugarMachine{
      addSugar(cup: CoffeeCup): CoffeeCup{
          return cup;
      }
  }

  class CheapMilkSteamer implements MilkSteamer{
    steamingMilk() {
      console.log("Steaming Milk... 🥛");
      return true;
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamingMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class FancyMilkSteamer implements MilkSteamer{
    steamingMilk() {
      console.log("Fancy Steaming Milk... 🥛");
      return true;
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamingMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class NoMilk implements MilkSteamer{
      makeMilk(cup: CoffeeCup): CoffeeCup{
          return cup;
      }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number, private milkFrother: MilkSteamer, private sugarMaker: SugarMachine) { // private 안쓰면 오류뜨는데 확인 해봐야됨
      this.coffeeBeans = coffeeBeans;      
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
      const coffee = this.extract(shots);
      const sugarAdd = this.sugarMaker.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdd);
    }

    clean() {
      console.log("Cleaning the machine..");
    }
  }


  // 우우
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const noMilk = new NoMilk();
  // 설탕
  const candySugarMaker = new CandySugarMachine();
  const normalSugarMaker = new NormalSugarMachine();
  const noSugar = new NoSugar


  const caffelatteMachine = new CoffeeMachine(32, cheapMilkMaker, noSugar);
  const sweetCoffeeMaker = new CoffeeMachine(32, noMilk, normalSugarMaker);
  const sweetCaffelatteMachine = new CoffeeMachine(32, cheapMilkMaker, candySugarMaker)
}



// 결론으로 공통된 성질을 갖고 있는 interface를 property type으로 지정함으로서
// interface를 구현한 여러가지 클래스를 모두 사용할 수 있음.
// 단순히 sugar를 만드는 interface를 만들고 그것을 구현하는 SugarMaker, CandySugarMaker 클래스를 만들면
// SweetCoffeeMaker의 property로 sugarMaker, candySugarMaker 둘다 이용 가능하다. 둘다 interface를 갖고 있기 때문에 가능
// Composition 이용과 비슷한 느낌, 이러한 것들을 dependency injection이라고 하는 것 같다.
// 이렇게 기능별로 나누어 놓았으니 기본이되는 CoffeeMachien 클래스에 기능을 하는 클래스를 프로퍼티로 받아와서 사용한다면
// 나머지 카페라떼, 스윗카페라떼 기계 등등의 클래스와 같은 기능을 하므로 CoffeeMachine만으로 모든 기능을 구현할 수 있다.