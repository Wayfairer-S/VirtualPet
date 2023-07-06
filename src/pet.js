function Pet(name) {
    this.name = name;
    this.age = 0;
    this.breed = 'Border Collie';
}

Pet.prototype.growUp = function() {
  this.age += 6;
};

module.exports = Pet;
