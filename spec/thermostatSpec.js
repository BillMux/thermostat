describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

// Thermostat starts at 20 degrees
  it("Starts at 20 degrees", function(){
    expect(thermostat.displayTemp()).toEqual(20)
  });

// You can increase the temperature with an up function
  describe("increase temp method", function(){
    it("increases temperature when we call up", function(){
      thermostat.up(3)
      expect(thermostat.displayTemp()).toBe(23)
    });
  });
});
