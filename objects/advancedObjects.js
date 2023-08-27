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
// A factory function is a function that returns an object 
// and can be reused to make multiple object instances

// Example 1

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // return 'BOO!'

// Example 2

const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
};
  
const tinCan = robotFactory('P-500', true);
tinCan.beep(); // return "Beep Boop"
console.log(tinCan.model); // return P-500
console.log(tinCan.mobile); // return true


// Property Value Shorthand - Destructuring

const robotsFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
}
  
// To check that the property value shorthand technique worked:
const newRobot = robotsFactory('P-501', false)
console.log(newRobot.model) // return 'P-501'
console.log(newRobot.mobile) // return false



// Destructured assignment
// it's not just creating a variable name, 
// it's pulling the property name from obj and 
// turning it into a variable that holds the same value the property itself had in the object

const robot4 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
const { functionality } =  robot4;
  
// robot.functionality.beep(); - same as the below
functionality.beep(); // return "Beep boop"



// Built-in object methods
const robot5 = {
model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot5);
console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot5)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot5 = Object.assign({laserBlaster: true, voiceRecognition: true}, robot5);
console.log(newRobot5);