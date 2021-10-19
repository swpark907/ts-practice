import { timeStamp } from "console";

interface Stack{
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack{
    
    private _size: number = 0; // 동일한 public변수가 있을 때 언더바_ 사용
    private head?: StackNode;

    // constructor(private capacity: number) { // 보통은 얼마만큼의 스택 사이즈를 가질 지 인자를 받음
    //     if(this.size === this.capacity){
    //         throw new Error('Stack is full!')
    //     }
    // }
    get size(){
        return this._size;
    }

    push(value: string): void{
        const node: StackNode = {value, next: this.head};
        this.head = node;    
        this._size++;
    }

    pop(): string{
        if(this.head == null){ // null == undefined, null !== undefined;
            throw new Error('Stack is empty')
        }
        const node = this.head; // 이부분 처리 못했었음, node로 원래 값을 저장한 후 head를 직접 바꿔주면 됨
        this.head = node.next;
        this._size--;            
        return node.value;
        
    }
}



const stack = new StackImpl();
stack.push('P1');
stack.push('P2');
stack.push('P3');
while(stack.size !== 0){
    console.log(stack.pop()); // --> P3 P2 P1 
}

// stack.pop(); 한번더 할 경우 에러

