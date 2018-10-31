$(document).ready(function() {
  var thermostat = new Thermostat()
    $("#temperature").text(thermostat.getTemp());
    $("#energy_use").text(thermostat.getEnergyUsage());

    $("#temp_up").click(function() {
        thermostat.up();
        $('#temperature').text(thermostat.getTemp());
        $("#energy_use").text(thermostat.getEnergyUsage());
    });

    $("#temp_dn").click(function() {
        thermostat.down();
        $('#temperature').text(thermostat.getTemp());
        $("#energy_use").text(thermostat.getEnergyUsage());
    });

    $("#temp_reset").click(function() {
        thermostat.reset();
        $('#temperature').text(thermostat.getTemp());
        $("#energy_use").text(thermostat.getEnergyUsage());
    });

    $("#power_save_switch").click(function() {
      thermostat.switchPowerSave()
      $('#temperature').text(thermostat.getTemp());
    });
});
