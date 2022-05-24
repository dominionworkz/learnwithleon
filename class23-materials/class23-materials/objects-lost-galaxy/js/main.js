//Create a dog object that has four properties and three methods
function aDogObject(breed, color, size, legs) {
  this.breed = breed
  this.color = color
  this.size = size
  this.legs = legs
  this.bark = function () {
    alert('Ruff Ruff Ruff')
  }
  this.lock = function () {
    alert(`Pet ${this.dog} beautiful!`)
  }
}

let americanPittBull = new aDogObject('PittBull')