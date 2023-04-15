let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    let baseFontSize = 5; // The base font size in 'em'
    let fontSizeIncrement = 0.01; // The increment value for font size
    let currentFontSize = baseFontSize + value * fontSizeIncrement;
    text.style.fontSize = currentFontSize + 'em';
    text.style.marginTop = value * -2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * -0.5 + 'px';
    gateRight.style.left = value * 0.5 + 'px';
});


// Function to smoothly scroll to target element over a specified duration
function smoothScrollTo(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;
      
        function animation(currentTime) {
          if (startTime === null) {
            startTime = currentTime;
          }
          var timeElapsed = currentTime - startTime;
          var scrollY = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, scrollY);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
      
        function ease(t, b, c, d) {
          // Easing function (linear)
          return c * t / d + b;
        }
      
        requestAnimationFrame(animation);
      }
      
      // Smoothly scroll to target sections with a duration of 10 seconds (10000ms)
      document.querySelector('a[href="#Ztext"]').addEventListener('click', function(event) {
        event.preventDefault();
        smoothScrollTo('#Ztext', 2000);
      });