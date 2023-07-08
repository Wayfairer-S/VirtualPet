const Pet = require('../src/pet');

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
});

