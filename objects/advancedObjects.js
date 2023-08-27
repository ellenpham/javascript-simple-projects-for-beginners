// 'this' keyword 
// The this keyword references the calling object 
// which provides access to the calling object’s properties.

// Example 1
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
};
  
goat.diet(); // return herbivore

// Example 2
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot.provideInfo());

// Privacy
// One common convention is to place an underscore _ 
// before the name of a property to mean that the property should not be altered

const robot1 = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot1._energyLevel = 'high';
  
  robot.recharge(); 
  // return "Recharged! Energy is currently at high30%."
  // this is the side-effect of type-coercion


// Getters

// Example 1

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
// To call the getter method: 
person.fullName; // return 'John Doe'

// Example 2

const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,

    get energyLevel () {
        if (typeof (this._energyLevel) === "number") {
        return `My current energy level is ${this._energyLevel}`
        } else {
        return 'System malfunction: cannot retrieve energy level'
        };
    }
};

console.log(robot2.energyLevel);


// Setters

const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    },
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
  };
  
  // Use the numOfSensors setter method on robot to assign _numOfSensors to 100
  robot3.numOfSensors = 100;
  console.log(robot3.numOfSensors); // return 100
  
  robot3.numOfSensors = "100";
  console.log(robot3.numOfSensors); // return Pass in a number that is greater than or equal to 0


// Factory function 