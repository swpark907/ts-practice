export{}
{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    class CoffeeMaker {
      static BEANS_GRAM_PER_SHOT = 7; // 변하지 않는 값은 static을 이용해 오브젝트 생성 할 때마다 선언 되는 것을 방지
      coffeeBeans: number = 0;

      constructor(coffeeBeans:number){
        this.coffeeBeans = coffeeBeans;
      }

      static coffeeMachine(coffeeBeans:number):CoffeeMaker{ // 메소드에 static을 이용하면 오브젝트를 생성하지 않고도 직접 이 메소드에 접근 가능하게됨. 예시는 맨 밑에 Math
          return new CoffeeMaker(coffeeBeans);
      }

      makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
          throw new Error("you need more coffeeBeans");
        }

        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
        return {
          shots,
          hasMilk: false,
        };
      }
    }

    const coffeemaker = new CoffeeMaker(15);
    console.log(coffeemaker);
    const coffeemaker2 = new CoffeeMaker(30);


    console.log(coffeemaker2);
    const coffeemaker3 = CoffeeMaker.coffeeMachine(35);
    Math.abs;
    Math.max(); // Math.xx 가 method에 static을 이용해서 오브젝트를 따로 생성하지 않고도 접근 할 수 있는 예시이다

}