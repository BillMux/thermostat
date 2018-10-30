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
    })
    it("doesn't let temperature above 25 degrees", function() {
      thermostat.up(11)
      expect(thermostat.displayTemp()).toBe(25)
    })
  })
});
