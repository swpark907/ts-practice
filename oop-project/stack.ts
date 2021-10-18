import { timeStamp } from "console";

interface Stack{
    _size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    value: string;
    next?: StackNode | undefined;
}

class StackImpl implements Stack{
    
    _size: number = 0;
    private head?: StackNode;

    push(value: string): void{

        this._size++;
        const node: StackNode = {value, next: this.head}
        this.head = node;
    }

    pop(): string{
        this._size--;
        delete this.head?.next;
        return 'string';
    }
}

// class Stackimpl implements Stack{
//     private _size: number = 0;
//     private head? : StackNode;
//     get size(){
//         return this._size;
//     }
//     push<T>(value: T extends Stack): void{
//         this._size++;
//         const node: StackNode = {value, next: this.head}
//     };
//     pop(): string{
//         this._size--;
        
//     }
// }



// const stack = new Stackimpl();
// stack.push('P1');
// stack.push('P2');
// stack.push('P3');
// while(stack.size !== 0){
//     console.log(stack.pop()); // --> P3 P2 P1 
// }

