// basic human class
class Human {
  hands: number;
  legs: number;
  head: number;
  constructor() {
    this.hands = 1;
    this.legs = 2;
    this.head = 2;
  }
  walk() {
    console.log("walk");
  }
  talk() {
    console.log("talk");
  }
}
// a person class that extends the human class
class Person extends Human {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    super();
    this.hands = 2;
    this.legs = 2;
    this.head = 1;
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

// a superHero class that extends the person class
class superHero extends Person {
  constructor(name: string, age: string) {
    super(name, age);
    this.hands = 2;
    this.legs = 2;
    this.head = 1;
  }
  fly() {
    console.log("fly");
  }
  supperStrength() {
    console.log("super strength");
  }
}

let superhero = new superHero("superman", "100");

superhero.walk();
superhero.talk();
superhero.sayName();
superhero.fly();
superhero.supperStrength();
