// Class

class Dog {
  constructor(name, weight, color, owner) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.owner = owner;
  }

  barks() {
    console.log('Raw Raw!');
  }

  jump() {
    console.log('Up!');
  }

  sit() {
    console.log('Down!');
  }
}


class Golden extends Dog {
  constructor() {
    super('Sol', 26.5, 'golden', 'Caren');
  }

  solBarks() {
    console.log('RAAW RAAAW! RAAAW!');
  }
}


const bullDog = new Dog('Toro', 12.5, 'brown', 'Arthur');
const solGolden = new Golden;

console.log(bullDog.barks());
console.log(solGolden.barks());
console.log(solGolden.solBarks());


console.log(bullDog instanceof Dog);
console.log(solGolden instanceof Dog);
console.log(bullDog instanceof Golden);