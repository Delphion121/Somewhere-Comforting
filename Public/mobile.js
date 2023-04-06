const container = document.getElementById("mobile-container");
const images = document.getElementsByClassName("mimage");
let currentIndex = 0;
let startPosition = 0;
let touchEndPosition = 0;

container.addEventListener("touchstart", e => {
  startPosition = e.touches[0].pageX;
});

container.addEventListener("touchmove", e => {
  touchEndPosition = e.touches[0].pageX;
});

container.addEventListener("touchend", e => {
  const difference = touchEndPosition - startPosition;
  if (difference > 0 && currentIndex > 0) {
    // Swipe right
    currentIndex--;
  } else if (difference < 0 && currentIndex < images.length - 1) {
    // Swipe left
    currentIndex++;
  }

  // Update the image displayed
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
});

