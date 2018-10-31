'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Starts at 20 degrees", function(){
    expect(thermostat.getTemp()).toEqual(20)
  });

  describe("change temp methods", function(){
    it("increases temperature when we call up", function(){
      thermostat.up()
      expect(thermostat.getTemp()).toBe(21)
    });

    it("reduces temperature when we call down", function(){
      thermostat.down()
      expect(thermostat.getTemp()).toBe(19)
    });
  });

  describe("guard temperature", function() {
    it("doesn't let temperature below 10 degrees", function() {
      thermostat.temp = 9
      expect(thermostat.getTemp()).toBe(10)
    });

    it("doesn't let temperature above 25 degrees if powersave is on", function() {
      thermostat.temp = 26
      expect(thermostat.getTemp()).toBe(25)
    });

    it("doesn't let temperature above 32 degrees if powersave is off", function() {
      thermostat.switchPowerSave();
      thermostat.temp = 33
      expect(thermostat.getTemp()).toBe(32)
    });
  });

  describe("power saving mode", function() {
    it("is on by default", function(){
      expect(thermostat.getPowerSave()).toBe(true)
    });

    it("can be turned off", function(){
      thermostat.switchPowerSave();
      expect(thermostat.getPowerSave()).toBe(false)
    });
  });

  describe("reset temperature", function() {
    it("resets to 20 degrees", function() {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.getTemp()).toBe(20)
    });
  });

  describe("energy usage", function() {
    it("shows low usage when temp is below 18", function() {
      thermostat.temp = 17
      expect(thermostat.getEnergyUsage()).toBe("low")
    });

    it("shows medium usage when temp is below 25", function() {
      thermostat.temp = 24
      expect(thermostat.getEnergyUsage()).toBe("medium")
    });

    it("shows high usage when temp is at least 25", function() {
      thermostat.temp = 25
      expect(thermostat.getEnergyUsage()).toBe("high")
    });

  });
});
