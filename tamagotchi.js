let health = 100;
let happiness = 100;
let energy = 100;
let attack = 100;
let defense = 100;


// let findFood 
// let sleep
// let eat
// let play



class Pet {
    constructor(type, name, colour, sex, superpower) {
      this.type = type;
      this.name = name;
      this.colour = colour;
      this.sex = sex;
      this.power = superpower;
    }
    present() {
      return 'I have a ' + this.type;
    }
}
  
class Unicorn extends Pet {
    constructor(type, name, colour, sex, superpower, magic) {
      super(type, name, colour, sex, superpower);
      this.power = magic;
      if (type == "Unicorn" && sex == "Male") {
        health = health - 10;
      } else {
        attack = attack + 10;
      }
      if (colour == "white" || colour == "black") {
        happiness = happiness + 10;
      } else {
        happiness = happiness - 10;
      }
     
    }
    show1() { 
      return this.present() + ', it is ' + this.power;

    }
}

class Seahorse extends Pet {
    constructor(type, name, colour, sex, superpower, sleeping) {
      super(type, name, colour, sex, superpower);
      this.power2 = sleeping;
      if (type == "Unicorn" && sex == "Female") {
        health = health + 10;
      } else {
        attack = attack -10;
      }
      if (colour == "red" || colour == "blue") {
        happiness = happiness + 10;
      } else {
        happiness = happiness - 10;
      }
    }
    show2() {
      return this.present() + ', it is ' + this.power2;
    }
}

class Tiger extends Pet {
    constructor(type, name, colour, sex, superpower, eating) {
      super(type, name, colour, sex, superpower);
      this.power3 = eating;
      if (type == "Unicorn" && sex == "Male") {
        attack = attack + 10;
      } else {
        attack = attack - 10;
      }
      if (colour == "yellow" || colour == "brown") {
        happiness = happiness + 10;
      } else {
        happiness = happiness - 10;
      }
      
    
    }
    show3() {
      return this.present() + ', it is ' + this.power3;
    }
}
  
// example = new Unicorn("Unicorn", "Don", "White", "Male", "flying", "magic");
// example2 = new Seahorse("Seahorse", "Don", "Blue", "Male", "flying", "sleeping");
example3 = new Tiger("Tiger", "Don", "Blue", "Female", "flying", "sleeping");
// console.log(example.show1());
// console.log(health, happiness, energy, attack, defense);
// console.log(example2.show2());
// console.log(health, happiness, energy, attack, defense);
console.log(example3.show3());
console.log(health, happiness, energy, attack, defense);