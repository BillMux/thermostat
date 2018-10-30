var Thermostat = function(){
  this.temp = 20
  this.powerSave = true
};

Thermostat.prototype.displayTemp = function () {
  if(this.temp < 10) {
    this.temp = 10;
  } else if(this.temp > 25 && this.powerSave === true) {
    this.temp = 25;
  }
  else if(this.temp > 32 && this.powerSave === false) {
    this.temp = 32;
  }
  return this.temp
};

Thermostat.prototype.up = function (amount) {
  this.temp += amount
};

Thermostat.prototype.down = function (amount) {
  this.temp -= amount
};

Thermostat.prototype.displayPowerSave = function () {
  return this.powerSave
};

Thermostat.prototype.turnOffPowerSave = function () {
  this.powerSave = false
};
