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
      video.src = videoURL;
      video.autoplay = true;
      video.controls = true;
      video.style.position = 'fixed';
      video.style.top = '0';
      video.style.left = '0';
      video.style.width = '200%';
      video.style.height = '200%';
  
      // Append the video element to the body or a specific container
      document.body.appendChild(video);
    }
  
    init();
  };
