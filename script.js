window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 000, 1000]; // Adjust the time for the video step
    
    function init() {
      box.addEventListener("click", openBox, false);
    }
  
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
  
      // Check if it's the step where you want to play the video
      if (step === 3) {
        // Set a timeout to play the video after 5 seconds
        setTimeout(playVideo, 5000);
      }
  
      if (step === 4) {
        return;
      }
      step++;
      setTimeout(openBox, stepMinutes[step - 1]);
    }
  
    function stepClass(step) {
      merrywrap.className = "merrywrap";
      merrywrap.className = "merrywrap step-" + step;
    }
  
    function playVideo() {
      // Replace 'your_video_url.mp4' with the actual URL of your video
      var videoURL = 'video.mp4';
    
      // Create a full-screen video element dynamically
      var video = document.createElement('video');
      video.src = videoURL;  // Set the video source
      video.autoplay = true;  // Enable autoplay
      video.controls = true;  // Show video controls (like play, pause, etc.)
      video.style.position = 'fixed';  // Fixed position
      video.style.top = '0';  // Positioned at the top
      video.style.left = '0';  // Positioned at the left
      video.style.width = '100%';  // Take up 100% width of the screen
      video.style.height = '100%';  // Take up 100% height of the screen
    
      // Append the video element to the body of the HTML document
      document.body.appendChild(video);
    
      // Play the video
      video.play();
    
      // Request full-screen mode
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }

// Initialize the function, perhaps by calling it when the page loads
init();

  };
