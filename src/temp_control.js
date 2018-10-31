$(document).ready(function() {
  var thermostat = new Thermostat()
    $('#temperature').text(thermostat.getTemp());
    $("#temp_up").click(function() {
        thermostat.up();
        $('#temperature').text(thermostat.getTemp());
    });
    $("#temp_dn").click(function() {
        thermostat.down();
        $('#temperature').text(thermostat.getTemp());
    });
    $("#temp_reset").click(function() {
        thermostat.reset();
        $('#temperature').text(thermostat.getTemp());
    });
    $("#power_save_switch").click(function() {
      thermostat.switchPowerSave()
    });
});
