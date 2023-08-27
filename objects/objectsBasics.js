// Accessing Properties
let spaceship0 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel', // 'Fuel Type' is quoted due to having space
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship0.numCrew; // return 5
  let planetArray = spaceship0.flightPath; // return ['Venus', 'Mars', 'Saturn']

// Bracker Notation

let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';

  // et isActive = spaceship['Active Mission']; --> same as below code
  let isActive = spaceship1[propName]
  
  console.log(isActive) // return true


// Property Assignment

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship2.color = 'glorious gold';
  spaceship2.numEngines = 5;
  
  delete spaceship2['Secret Mission'];
  
  console.log(spaceship2)

// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
     console.log(retreatMessage);
  },

  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();

// Nested objects

let spaceship3 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship3.crew.captain['favorite foods'][0]
  
  spaceship3.passengers = [
    {
      name: 'John', 
      age: 34,
      gender: 'male'
    }, 
  
    {
      name: 'Mary', 
      age: 28,
      gender: 'female'
    }
  ]
  
  let firstPassenger = spaceship3.passengers[0]
  
  console.log(firstPassenger)
  console.log(spaceship3)



// Pass by reference
// functions which change object properties actually mutate the object permanently 
// (even when the object is assigned to a const variable)

let spaceship4 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = (obj) => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship4);
  remotelyDisable(spaceship4);
  
  console.log(spaceship4['Fuel Type']) // return 'avocado oil'
  console.log(spaceship4.disabled) // return true
  
  console.log(spaceship4) // return { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }


// Looping Through Objects
// iterating through objects with the for...in syntax

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember} : ${spaceship.crew[crewMember].name}`)
}; 
/* return
captain : Lily
chief officer : Dan
medic : Clementine
translator : Shauna
*/

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`)
}

/* return
Lily : Computer Engineering
Dan : Aerospace Engineering
Clementine : Physics
Shauna : Conservation Science
*/
