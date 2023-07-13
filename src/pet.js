function Pet(name) {
    this.name = name;
    this.age = 0;
    this.breed = 'Border Collie';
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  this.fitness += 4;
  if (this.fitness > 10) 
    this.fitness = 10; 
}

Pet.prototype.feed = function() {
  this.hunger -= 3;
  if (this.hunger < 0)
    this.hunger = 0;
}

Pet.prototype.checkUp = function() {
  if (this.hunger <= 5 && this.fitness >= 3)
    return ('Im fine for now. Woof!')
  if (this.hunger >= 5 && this.fitness <= 3)
    return ('Im hungry and I need a walk!');
  if (this.hunger >= 5)
    return ('Im hungry!');
  if (this.fitness <= 3)
    return ('I need a walk!');
};

Pet.prototype.isAlive = function() {
  if (this.hunger >= 10)
    return 'The pet has died.';
  if (this.fitness <= 0)
    return 'The pet has died.';
  if (this.age >= 30)
    return 'The pet has died.';
  
  return 'The pet is alive and well!';
};





module.exports = Pet;
