var countDownDate = new Date("Oct 6, 2023 10:00:00").getTime();
          
          // Update the count down every 1 second
          var x = setInterval(function() {
          
            // Get today's date and time
            var now = new Date().getTime();
              
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
              
            // Check if the countdown has expired
            if (distance <= 0) {
              clearInterval(x);
              document.getElementById("demo").innerHTML = "EXPIRED";
              document.querySelectorAll(".countdown-number").forEach(function(element) {
                element.innerHTML = "00"; // Set countdown values to "00" when expired
              });
              return;
            }
              
            // Time calculations for days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
            // Output the countdown numbers and labels
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
          }, 1000);