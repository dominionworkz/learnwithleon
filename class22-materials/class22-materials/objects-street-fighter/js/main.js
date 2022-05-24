//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(punch, kick, headBunt, quickHands) {
  this.punch = punch
  this.kick = kick
  this.headBunt = headBunt
  this.quickHands = quickHands
  this.catchPhrase = catchPhrase
  this.taunt = function() {
    console.log(`Good Knight You weakling ${this.quickHands}`)
  }
  this.winning = function () {
    console.log(`This is my domain! ${this.catchPhrase}`)
  }
  this.bobbing = function(){
    console.log("Sike, Untouchable!")
  }
}

let Quim = new MakeCharacter('KaBoom', 'KaBoom', 'Bow Down weakling')