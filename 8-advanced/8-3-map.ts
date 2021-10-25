type Video = {
  title: string;
  author: string;
};
type Optional<T> = {
  [P in keyof T]?: T[P];
}

type ReadOnly<T> = {
  readonly [P in keyof T]?: T[P];
}
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}
// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// }
// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
// }


type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hi',
}

type Animal = {
  name: string;
  age: number;
}

type AnimalOptional = Optional<Animal>
const animalOp: AnimalOptional = {
  name: 'Park'
}

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}