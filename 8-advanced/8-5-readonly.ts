{
  type ToDo = {
    title: string;
    description: string;
  }

  function display(todo: Readonly<ToDo>){ // Readonly 이미 만들어져 있음. Ctrl을 눌러 여러 유틸리티 타입을 확인해보자
    // todo.title = 'study'  // 오류 발생
  }
}