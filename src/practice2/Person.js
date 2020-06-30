export class Person {
  constructor(name) {
    this.name = name;
  }

  move = () => {
    console.log(`${this.name} is moving`);
  }
}
