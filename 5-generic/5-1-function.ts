{
    function checkNotNullNumber(arg: number | null): number{
        if(arg === null){
            throw new Error('not valid number')
        }
        return arg;
    }

    function checkNotNullAny(arg: any | null): any{ // retunr값의 타입이 보장되지 않기 때문에 나쁜 예시
        if(arg === null){
            throw new Error('not valid number')
        }
        return arg;
    }

    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC { // 인자를 전달하는 순간 인자의 타입을 결정해줌, 사용하는 사람이 타입을 결정할 수 있다.
        if(arg === null){
            throw new Error('not valid number')
        }
        return arg;
    }

    const result = checkNotNull(123); 
    const boal: boolean = checkNotNull(true);
    console.log(result)
    console.log(boal)
}