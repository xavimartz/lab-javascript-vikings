// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage

    if(this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
          }  
    } 
    this.battleCry = function(){
    return `Odin Owns You All!`
    }
  }
  
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength){
  Soldier.call(this, health, strength)
  this.receiveDamage = function(damage) {
    this.health -= damage
    if(this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
        }  
    }  
  }


Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

// War

function War(){

  this.vikingArmy = [],
  this.saxonArmy = []

  this.addViking = function(viking){ 
    this.vikingArmy.push(viking)
  }

  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon)
  }

  this.vikingAttack = function(){
    const randomoSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)]

    const battleResult = this.saxonArmy[randomoSaxon].receiveDamage(Viking.strength)
    if (this.randomoSaxon[Saxon].health <= 0){
      this.saxonArmy.splice(randomoSaxon,1)
    }
    return battleResult
  }

  this.saxonAttack = function(){
    const randomViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)]
    const battleResult = this.vikingArmy[randomViking].receiveDamage(Saxon.strength)
    if (this.vikingArmy[Viking].health <= 0){
      this.vikingArmy.splice(randomViking,1)
    }
    return battleResult    
  }

  this.showStatus = function(){
    if(saxonArmy.length == 0){
      return "Vikings have won the war of the century!"
    }else if(vikingArmy.length == 0){
      return "Saxons have fought for their lives and survive another day..."
    }else
    return "Vikings and Saxons are still in the thick of battle."
  }
}