$(document).ready(function() {
  function updateWeather(city) {
    url = 'http://api.openweathermap.org/data/2.5/weather?q='
    api = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    unit = '&units=metric'
    $.get(url + city + api + unit, function(data) {
    $('#city_weather').text(data.main.temp);
    });
  };
  updateWeather($('#city option:selected').text())
  var thermostat = new Thermostat();
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
