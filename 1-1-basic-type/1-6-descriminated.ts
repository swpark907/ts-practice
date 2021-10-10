{
    type SuccessState = {
        result: 'success'
        response : {
            body: string;
        }
    }

    type FailState = {
        result: 'fail'
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function printLogin(state: LoginState){
        if('response' in state){
            console.log(`🎉 ${state.response.body}`)
        } else{
            console.log(state.reason);
        }
    }

    const success: SuccessState={
        result: 'success',
        response:{
            body: 'success',
        }
    }

    const fail: FailState = {
        result: 'fail',
        reason: '💡 check the server connected'
    }
    printLogin(success);
    printLogin(fail);
}