$(document).ready(function() {    
    var apiKey = "8d2f125b413d2e4a64c2d3e6fdf781e9" // Enter your API Key here      
    
     // Notice the templating here, use that when you form your url
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop



    //loops through state_info getting state name, lat, and long
    for(var state in state_info){
        
        var lat= state_info[state].lat;
        var long = state_info[state].lng;
        var state_name=state;

    
        //tell which state to get data for using URL query
    
    var url =`https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;



  const result = $.ajax({url:url, state:state, dataType:"jsonp"}).then(function(data) {
                
                var state=this.state
                                  
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                var temperature = data.currently.temperature;

                
                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red

                if (temperature<=10){
                    $(`#${state}`).css('fill', "#6495ED");
                }
                else if(temperature>10 && temperature<=20){
                    $(`#${state}`).css('fill', "#7FFFD4");
                }
                else if(temperature>20 && temperature<=30){
                    $(`#${state}`).css('fill', "#0000FF");
                }
                else if(temperature>30 && temperature<=40){
                    $(`#${state}`).css('fill', "#008B8B");
                }
                else if(temperature>40 && temperature<=50){
                    $(`#${state}`).css('fill', "#00BFFF");
                }
                else if(temperature>50 && temperature<=60){
                    $(`#${state}`).css('fill', "#F08080");
                }
                else if(temperature>60 && temperature<=70){
                    $(`#${state}`).css('fill', "#CD5C5C");
                }
                else if(temperature>70 && temperature<=80){
                    $(`#${state}`).css('fill', "#8B0000");
                }
                else if(temperature>80 && temperature<=90){
                    $(`#${state}`).css('fill', "#B22222");
                }
                else if(temperature>90){
                    $(`#${state}`).css('fill', "#FF0000");
                }          
                
    });


    

}//for loop
});