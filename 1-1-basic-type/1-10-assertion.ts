{
    /**
     * Type Assertions
     */

    function jsStrFunc(): any{
        // return 'hello';
        return 2;
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length)

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 오류 발생

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);
    
}