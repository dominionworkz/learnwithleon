//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProCharacter(stance, deck, color, size, wheels) {
  this.stance =chStance
  this.deck = 'deck'
  this.color = 'midNightBlue'
  this.size = 'large'
  this.legs = 2
  this.taunt = function () {
    alert('RailGrind')
  }
  this.boast= function () {
    alert(`tonyHawkingIt ${this.deck} straightBangers!`)
  }
}

let tonyHawkProSkater = new tonyHawkPro('{ProSkater}')