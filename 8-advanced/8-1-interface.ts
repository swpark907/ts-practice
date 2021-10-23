type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface{
  x: number;
  y: number;
}

//  interface는 동일한 이름으로 추가할 수 있음, type은 불가

interface PositionInterface{ 
  z: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
}

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
}

// class 
class Pos1 implements PositionType{
  x: number;
  y: number;
}

class Pos2 implements PositionInterface{
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionType{
  z: number;
}

type ZPositionType = PositionType & {z: number};

// Type aliases can use computed properties

type Person = {
  name: string;
  age: number;
}
type Name = Person['name']; // string

type ABC = 'a' | 'b' | 'c'; // 유니온 타입
