var Thermostat = function(){
  this.temp = 20
};

Thermostat.prototype.displayTemp = function () {
  if(this.temp < 10) {
    this.temp = 10;
  }
  if(this.temp > 25) {
    this.temp = 25;
  }
  return this.temp
};

Thermostat.prototype.up = function (amount) {
  this.temp += amount
};

Thermostat.prototype.down = function (amount) {
  this.temp -= amount
};
