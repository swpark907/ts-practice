import { throws } from "assert";
import { log } from "console";


{
    
    type CoffeeCup = {
        shots: number;
        temperature: 'hot' | 'ice'
        hasMilk?: boolean;        
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number, temperature: 'hot'|'ice'): CoffeeCup;
    }

    

    class CoffeeMachine implements CoffeeMaker {
        
        private static BEANS_GRAMM_PER_SHOT: number = 10;
        private coffeeBeans: number = 0;
        private temperature: string = 'hot';

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine (coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number){
            if(shots > 0){
            console.log(`Grinding beans for ${shots} shots`)
        }
        }
        private preheat(temperatuer: 'hot' | 'ice'){
            if(temperatuer === 'hot'){
                console.log('Heating water..')

            }
            
        }

        private extract(shots: number ): CoffeeCup{
            console.log(`Pulling ${shots} shots`)
            return{
                    shots,
                    hasMilk: false,
                    temperature: 'hot',
                    hasSugar: false
                }
        }

        makeCoffee(shots: number, temperature: 'hot'|'ice'): CoffeeCup{
            this.grindBeans(shots);
            this.preheat(temperature);
            return this.extract(shots);
            // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
            //     throw new Error('Not enough coffee beans!!');
            // }
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            // 
        }

        clean(){
            console.log('Cleaning the machine..')
        }
    }

    class CheapMilkSteamer{
        private steamMilk(): void{
            console.log('Steaming milk..')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    class AutomaticSugarMixer{
        private getSugar(){
            console.log('Getting some sugar from candy')
        }

        addSugar(cup: CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: true,
            }
        }
    }



    class CaffeLatteMachine extends CoffeeMachine{

        constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer){
            super(beans);
        }
        private steamMilk(): void{
            console.log('Steaming milk..')
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots, 'hot');
                return this.milkFrother.makeMilk(coffee);
            
        }

    }    

    class SweetCoffeeMachine extends CoffeeMachine{
        private sugarCoffee(): void{
            console.log('Adding sugar to coffee...')
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots, 'hot');
            this.sugarCoffee();
            return{
                ...coffee,
                hasSugar: true
            }
        }
    }


    const machines = [
        new CoffeeMachine(16),        
        new CaffeLatteMachine(16),
        new SweetCoffeeMachine(16),
    ];

    machines.forEach(machine =>     {
        console.log('-------------------------');
        machine.makeCoffee(1, 'hot');
    })
    
    

}