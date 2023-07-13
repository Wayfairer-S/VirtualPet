const Pet = require('../src/pet');

const MAXIMUM_FITNESS = 10;

describe('pet', () => {

  let pet 
  beforeEach(() => {
    pet = new Pet('Fido')
  }) 
  describe('constructor', () => {

    it('sets the name property', () => {
      
  
      expect(pet.name).toEqual('Fido');
    });
  });
  
  describe('constructor', () => {
  
    it('has a initial age of 0', () => {
      
  
      expect(pet.age).toEqual(0);
    });
  });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
      
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });
it('increases hunger and descreases fitness as the pet ages.' , () => {
  
  pet.growUp()
  expect(pet.age).toEqual(1);    
  expect(pet.hunger).toEqual(5);  
  expect(pet.fitness).toEqual(7);
});

describe('walk', () => {
  

  it('Takes the pet for a walk, never going above 10.', () => {
    pet.growUp();
    pet.walk();
    
    expect(pet.fitness).toEqual(10);  

  
  });
});


describe('feed', () => {
  

  it('Feeds the pet, decreasing its hunger level by 3 and never below 0.' , () => {
      pet.growUp();
      pet.feed();
      expect(pet.hunger).toEqual(2);
  });
});

describe('checkup', () => {
  it('Checks if the pet is hungry', () => {
    pet.hunger = 6;

    expect(pet.checkUp()).toBe('Im hungry!');

  });

  it('Checks if the pet needs a walk', () => {
    pet.fitness = 2;

    expect(pet.checkUp()).toBe('I need a walk!');
  });

  it('Checks if both properties of hunger and fitness apply', () => {
    pet.hunger = 6;
    pet.fitness = 2;
  
    expect(pet.checkUp()).toBe("Im hungry and I need a walk!");
  });

  it('Checks if both properties apply, and if not returns everything is fine.', ()=> {
    pet.hunger = 4;
    pet.hunger = 4;

    expect(pet.checkUp()).toBe('Im fine for now. Woof!');

  });
});

describe('isDead', () => {
  it('Checks if the pets low stats has killed it', () => {
   pet.hunger = 10;
   pet.fitness = 0;
   pet.age = 30;
   
   pet.isAlive();

   expect(pet.isAlive()).toBe('The pet has died.')
  
  });
});


});


