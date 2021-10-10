{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLoginStates(state: ResourceLoadState){

  switch (state.state) {
    case "loading":
      console.log(`👀 Loading...`);
      break;
    case "success":
      console.log(`😃 loaded`);
      break;
    case "fail":
      console.log("😱 no network");
      break;
  }
}


  printLoginStates({ state: 'loading' }); // 👀 loading...
  printLoginStates({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginStates({ state: 'fail', reason: 'no network' }); // 😱 no network
}
