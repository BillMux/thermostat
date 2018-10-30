'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Starts at 20 degrees", function(){
    expect(thermostat.displayTemp()).toEqual(20)
  });

  describe("change temp methods", function(){
    it("increases temperature when we call up", function(){
      thermostat.up(3)
      expect(thermostat.displayTemp()).toBe(23)
    });

    it("reduces temperature when we call down", function(){
      thermostat.down(3)
      expect(thermostat.displayTemp()).toBe(17)
    });
  });

  describe("guard temperature", function() {
    it("doesn't let temperature below 10 degrees", function() {
      thermostat.down(11)
      expect(thermostat.displayTemp()).toBe(10)
    });

    it("doesn't let temperature above 25 degrees if powersave is on", function() {
      thermostat.up(11)
      expect(thermostat.displayTemp()).toBe(25)
    });

    it("doesn't let temperature above 32 degrees if powersave is off", function() {
      thermostat.turnOffPowerSave();
      thermostat.up(15)
      expect(thermostat.displayTemp()).toBe(32)
    });
  });

  describe("power saving mode", function() {
    it("is on by default", function(){
      expect(thermostat.displayPowerSave()).toBe(true)
    });

    it("can be turned off", function(){
      thermostat.turnOffPowerSave();
      expect(thermostat.displayPowerSave()).toBe(false)
    });
  });

  describe("reset temperature", function() {
    it("resets to 20 degrees", function() {
      thermostat.up(5)
      thermostat.reset()
      expect(thermostat.displayTemp()).toBe(20)
    });
  });

  describe("energy usage", function() {
    it("shows low usage when temp is below 18", function() {
      thermostat.down(5)
      expect(thermostat.showEnergyUsage()).toBe("low")
    });

    it("shows low usage when temp is below 25", function() {
      thermostat.up(3)
      expect(thermostat.showEnergyUsage()).toBe("medium")
    });

    it("shows low usage when temp is at least 25", function() {
      thermostat.up(7)
      expect(thermostat.showEnergyUsage()).toBe("high")
    });

  });
});
