var Thermostat = function(){
  this.temp = 20
  this.powerSave = true
  this.energyUsage = "medium"
};

Thermostat.prototype.getTemp = function() {
  if(this.temp < 10) this.temp = 10
  else if(this.temp > 25 && this.powerSave === true) this.temp = 25
  else if(this.temp > 32 && this.powerSave === false) this.temp = 32
  return this.temp
};

Thermostat.prototype.up = function() {
  this.temp += 1
};

Thermostat.prototype.down = function() {
  this.temp -= 1
};

Thermostat.prototype.reset = function() {
  this.temp = 20
};

Thermostat.prototype.getPowerSave = function() {
  return this.powerSave
};

Thermostat.prototype.switchPowerSave = function() {
  this.powerSave = !this.powerSave
};


Thermostat.prototype.getEnergyUsage = function() {
  if(this.temp < 18) this.energyUsage = "low"
  if(this.temp > 24) this.energyUsage = "high"
  return this.energyUsage
};
