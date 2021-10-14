$(document).ready(function(){
    $("#tomars").click(function(){
        $("#content").html(" ")
        var $toMars =  `<div class="mars-container"> 
        <style>
        body {
          background-image: url('wallpaperflare.com_wallpaper.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;  
          background-size: cover;
          z-index: 1;
        }
        </style>
         <h1 id='main-title'>TO MARS</h1>
        <p id = 'description'>At an average distance of 140 million miles,
         Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is,
          so it still has decent sunlight. It is a little cold, but we can warm it up. 
         Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we 
         can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth,
          so you would be able to lift heavy things and bound around.
         Furthermore, the day is remarkably close to that of Earth.</p>
         <div id='pricetomars'>AND A ROUND-TRIP TICKET TO MARS WILL COST JUST $1,000,000</div>

         </div>`
        $("#content").append($toMars)
    })
    $(".logo").click(function(){
        $("#content").html(" ")
        
        var $homePage= `<div class="background" id="content">
        <div class="text-home">
        <h1 id="main-title">SPACE & BEYOND</h1>
        <h1 id="bookticket">Book your ticket now</h1>
        <center>
        <video id="home-vid" width="60%" height="40%" autoplay muted>
            <source src="home vid.mp4.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
          </center>
          
    </div>
    </div>`
    $("#content").append($homePage)
    })
    $("#tojupiter").click(function(){
        console.log('bla');
        $("#content").html(" ")
        var $toJupiter =`<div class="jupiter">
        <style>
        body {
          background-image: url('jupiter.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;  
          background-size: cover;
          z-index: 1;
        }
        </style>
        <h1 id ="main-title">TO JUPITER</h1>
        <p id ="description">VEHICLE
        STARSHIP
        Starship will be the world’s most powerful launch vehicle ever developed,
         with the ability to carry in excess of 100 metric tonnes to Earth orbit.
          Drawing on an extensive history of launch vehicle and engine development programs,
           SpaceX has been rapidly iterating on the design of Starship with orbital-flight 
           targeted for 2020.</p>
        
        </div>`
        $("#content").append($toJupiter)

    })
})