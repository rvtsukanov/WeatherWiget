$( document ).ready(function() {
  current_temp = 0;
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=3c1452b897ca4288fd4d5b991ce0b1d3&q=London', function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    console.log(key);
    if(key == 'main'){
      $.each(val, function(key2, val2){
        console.log(key2);
        if(key2 == 'temp'){
          current_temp = Math.round((val2 - 273.15));
          $('#temp').children().text(current_temp + "°");
        }
      })


    }
  });
});
    $('#block').hover(function(){
      $(this).toggleClass('focused');
    });
});
