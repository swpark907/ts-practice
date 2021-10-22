{
  class NetworkClient{
    tryConnect(){
      throw new Error('no network');
    }
  }
  
  class UserService {
    constructor(private client: NetworkClient){}
  
    login(){
      // 가장 에러를 처음으로 잡아낼 수 있는 곳
      // 하지만 여기서 try... catch로 에러를 잡아내어도 유의미하게 에러를 처리할 수 없음.
      this.client.tryConnect();
    } 
  }
  
  class App{
    constructor(private service: UserService){}
  
    run(){
      try{
        this.service.login();
      } catch(error){
        // 그렇기 때문에 실질적으로 에러를 잡아 유의미하게 처리할 수 있는 이곳에서 try catch를 사용
        // show dialog to user
      }
    }
  }
  
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  
}