// class Singleton {
//     private static instance: Singleton

//     private constructor () {}

//     static getInstance (): Singleton {
//       if (!Singleton.instance) {
//         Singleton.instance = new Singleton()
//       }
//       return this.instance
//     }
//   }

//   const singleton1 = Singleton.getInstance()
//   const singleton2 = Singleton.getInstance()
//   console.log(singleton1 === singleton2) // true

class Singleton {
  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private static instance: Singleton;

  public name: string;
  public age: number;

  static getInstance(name: string, age: number): Singleton {
    if (!this.instance) {
      this.instance = new Singleton(name, age);
    }
    return this.instance;
  }
}

const singleton1 = Singleton.getInstance("Mary", 20);
const singleton2 = Singleton.getInstance("Jack", 20);
console.log(singleton1, singleton2);
// Singleton { name: 'Mary', age: 20 } Singleton { name: 'Mary', age: 20 }
