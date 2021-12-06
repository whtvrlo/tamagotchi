let health = 100;
let happiness = 100;
let energy = 100;



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
      if (sex == "Male") {
          health = health - 10;
      }
    }
    show() {
      return this.present() + ', it is a ' + this.power;
    }
}

class Seahorse extends Pet {
    constructor(type, name, colour, sex, superpower, sleeping) {
      super(type, name, colour, sex, superpower, eating);
      this.power = sleeping;
    }
    show() {
      return this.present() + ', it is a ' + this.power;
    }
}

class Tiger extends Pet {
    constructor(type, name, colour, sex, superpower, eating) {
      super(type, name, colour, sex, superpower);
      this.power = eating;
    
    }
    show() {
      return this.present() + ', it is a ' + this.power;
    }
}
  
example = new Unicorn("Unicorn", "Don", "White", "Male", "flying");
console.log(example.show());
console.log(health);