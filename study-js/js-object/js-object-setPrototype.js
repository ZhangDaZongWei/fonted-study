function Mammal() {
  this.isMammal = 'yes'
}

function MammalSpecies(sMammalSpcies) {
  this.species = sMammalSpcies
}

MammalSpecies.prototype = new Mammal()

console.log(MammalSpecies.prototype.isMammal)