$(document).ready(function(){
    $('#submitWeather').click(function(){

        let city = $('#city').val();
        if(city != ''){

            $.ajax({
                url:'libs/php/getInfo.php',
                type:"POST",
                dataType:"json",
                data:{
                    city : $('#city').val()
                },
                success: function(data){
                    console.log(data);
                    let widget = show(data);
                    $("#show").html(widget);
                    $('#city').val('');
                }
              
            });

        }else{
            $('#error').html("<div class='alert alert-danger' id='errorCity'><a href = '#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field can not be empty</div>");
        }
    });
});

function show(data) {
    return  "<h3 style='text-align: center'>Current Weather for " + data.data.name + ", " + data.data.sys.country + "</h3>" +
            "<h4><strong>Weather</strong>: "+ data.data.weather[0].main +"</h4>" + 
            "<h4><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" +data.data.weather[0].icon+".png'> " + data.data.weather[0].description +"</h4>" +
            "<h4><strong>Temperature</strong>: " + data.data.main.temp + "&deg;C</h4>" +
            "<h4><strong>Pressure</strong>: " + data.data.main.pressure + "hPa</h4>" +
            "<h4><strong>Humidity</strong>: " + data.data.main.humidity + "%</h4>" +
            "<h4><strong>Min. Temperature</strong>: " + data.data.main.temp_min + "&deg;C</h4>" +
            "<h4><strong>Max. Temperature</strong>: " + data.data.main.temp_max + "&deg;C</h4>" +
            "<h4><strong>Wind Speed</strong>: " + data.data.wind.speed + "m/s</h4>" +
            "<h4><strong>Wind Direction</strong>: " + data.data.wind.deg + "&deg;C</h4>";

};

