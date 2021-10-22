{
  // 더 세부적인 Error 핸들링을 위한 instanceOf는 
  // catch에 전달되는 error가 타입의 정보를 갖고있지 않기 때문에(any) 사용할 수 없음
  // 따라서 try catch는 정말 예상할 수 없는 문제가 발생할 수 있는 곳에서 사용하고
  // 다른 경우는 Error State를 사용하는 것이 좋음
  
  type NetworkErrorState = {
    result: 'fail',
    reason: 'offline' | 'down' | 'timeout'
  }
  type SuccessState = {
    result: 'success';
  }
  
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient{
    tryConnect(){
      throw new Error('no network');
    }
  }
  
  class UserService {
    constructor(private client: NetworkClient){}
  
    login(){
      this.client.tryConnect();
    } 
  }
  
  class App{
    constructor(private service: UserService){}
  
    run(){
      try{
        this.service.login();
      } catch(error){
        // show dialog to user
      }
    }
  }
  
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  
}