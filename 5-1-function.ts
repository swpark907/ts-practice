{
    function checkNotNullNumber(arg: number | null): number{
        if(arg === null){
            throw new Error('not valid number')
        }
        return arg;
    }

    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
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