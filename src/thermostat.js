var Thermostat = function(){
  this.temp = 20
};

Thermostat.prototype.displayTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function (amount) {
  this.temp += amount
};
