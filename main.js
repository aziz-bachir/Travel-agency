$(document).ready(function(){
    $("#tomars").click(function(){
        $("#content").html(" ")
        var $toMars =  `<div class="mars-container"> 
        <style>
        body {
          background-image: url('./imgs/bg9.jpg');
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
         <div id='pricetomars'>A ROUND-TRIP TICKET TO MARS WILL COST JUST $1,000,000</div>
         <div id ='datetomars'>FIRST TRIP IN 12/12/2022</div>   
         <style>
         p {
           text-align: center;
           font-size: 60px;
           margin-top: 0px;
         }
         </style>
         </head>
         <body>
         
         <p id="demo"></p>
         
         <script>
         // Set the date we're counting down to
         var countDownDate = new Date("Dec 12, 2022 15:37:25").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         
           // Get today's date and time
           var now = new Date().getTime();
             
           // Find the distance between now and the count down date
           var distance = countDownDate - now;
             
           // Time calculations for days, hours, minutes and seconds
           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);
             
           // Output the result in an element with id="demo"
           document.getElementById("demo").innerHTML = days + "d "+ hours + "h "
           + minutes + "m " + seconds + "s ";
             
           // If the count down is over, write some text 
           if (distance < 0) {
             clearInterval(x);
             document.getElementById("demo").innerHTML = "EXPIRED";
           }
         }, 1000);
         </script>
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
        $("#content").html(" ")
        var $toJupiter =`<div class="jupiter">
        <style>
        body {
          background-image: url('./imgs/jupiter.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;  
          background-size: cover;
          z-index: 1;
        }
        </style>
        <h1 id ="main-title">TO JUPITER</h1>
        <p id ="description">With a radius of 43,440.7 miles (69,911 kilometers),
         Jupiter is 11 times wider than Earth. If Earth were the size of a nickel,
          Jupiter would be about as big as a basketball Jupiter is the fifth planet from our Sun and is,
         by far, the largest planet in the solar system – more than twice as massive
         as all the other planets combined. Jupiter's stripes and swirls are actually cold,
         windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium
        </p>
        <div id='pricetomars'>A ROUND-TRIP TICKET TO MARS WILL COST JUST $10,000,000</div>
        <div id ='datetomars'>FIRST TRIP IN 05/06/2024</div>  
        <style>
        p {
          text-align: center;
          font-size: 60px;
          margin-top: 0px;
        }
        </style>
        </head>
        <body>
        
        <p id="demo"></p>
        
        <script>
        // Set the date we're counting down to
        var countDownDate = new Date("Jun 05, 2024 15:37:25").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"
          document.getElementById("demo").innerHTML = days + "d "+ hours + "h "
          + minutes + "m " + seconds + "s ";
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
        </script>
        
        
        </div>`
        $("#content").append($toJupiter)

    })
    $("#tomoon").click(function(){
        $("#content").html(" ")
        var $toMoon =`<div class="moon">
        <style>
        body {
          background-image: url('./imgs/bg12.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;  
          background-size: cover;
          z-index: 1;
        }
        </style>
        <h1 id ="main-title">TO THE MOON</h1>
        <p id ="description">With a radius of 43,440.7 miles (69,911 kilometers),
         Jupiter is 11 times wider than Earth. If Earth were the size of a nickel,
          Jupiter would be about as big as a basketball Jupiter is the fifth planet from our Sun and is,
         by far, the largest planet in the solar system – more than twice as massive
         as all the other planets combined. Jupiter's stripes and swirls are actually cold,
         windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium
        </p>
        <div class="content">
         <div class="images">
            <img src="./imgs/bg6.jpg">
            <img src="./imgs/bg3.jpg">
            <img src="./imgs/bg10.jpg">
            <img src="./imgs/bg11.jpg">
         </div>
      </div>
      <div id='pricetomars'>A ROUND-TRIP TICKET TO MARS WILL COST JUST $500,000</div>
        <div id ='datetomars'>SECOND TRIP IN 25/12/2021</div> 
        <style>
        p {
          text-align: center;
          font-size: 60px;
          margin-top: 0px;
        }
        </style>
        </head>
        <body>
        
        <p id="demo"></p>
        
        <script>
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 25, 2021 15:37:25").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"
          document.getElementById("demo").innerHTML = days + "d "+ hours + "h "
          + minutes + "m " + seconds + "s ";
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
        </script>
         </div>`
        $("#content").append($toMoon)

    })
    var indexValue = 0;
         function slideShow(){
           setTimeout(slideShow, 1500);
           var x;
           const img = document.querySelectorAll("img");
           for(x = 0; x < img.length; x++){
             img[x].style.display = "none";
           }
           indexValue++;
           if(indexValue > img.length){indexValue = 1}
           img[indexValue -1].style.display = "block";
         }
         slideShow();

         

})