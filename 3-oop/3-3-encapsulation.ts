export{}
{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    class CoffeeMaker {

        // public 이 default
        // protected 는 상속한 클래스에서는 접근 가능

      private static BEANS_GRAM_PER_SHOT = 7; // 변하지 않는 값을 외부에서 보여질 필요가 없음. private
      private coffeeBeans: number = 0; // 외부에서 현재 커피 콩 개수를 마음대로 바꾸면 위험, 커피를 추가하는 행위롤 통해서만 변경 가능해야 하므로 private

      constructor(coffeeBeans:number){
        this.coffeeBeans = coffeeBeans;
      }

      static coffeeMachine(coffeeBeans:number):CoffeeMaker{
          return new CoffeeMaker(coffeeBeans);
      }

      fillCoffeeBeans(beans: number){
          if(beans < 0){
              throw new Error('value for beans should be greater than 0')
          }

          this.coffeeBeans += beans;
          console.log('current beans: ',this.coffeeBeans)
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

    // const maker = new CoffeeMaker(15);
    // maker.fillCoffeeBeans(15);
    // maker.coffeeBeans = 4    ===> invalid

    class User {
        
        get fullName(): string{ // react의 useState활용처럼 firstName, lastName이 바뀔때 마다 값을 갱신함
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){
                console.log('age should be greater than 0');
                return;
            }
            this.internalAge = num;
            console.log('age is ',this.internalAge)
        }

        constructor(private firstName: string, private lastName: string){
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName); // get 을 쓴 것에 접근할 때는 변수처럼 접근. ()를 쓰지 않는다.
    // user.firstName = 'Seung'; ===> firstName이 private 이기 때문에 오류남
    console.log(user.fullName);
    user.age = 5;
}