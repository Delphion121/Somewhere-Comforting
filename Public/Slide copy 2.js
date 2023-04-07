const track = document.getElementById("image-track");
const tutorial = document.getElementById("tutorial");

const handleOnDown = e => {
  track.dataset.mouseDownAt = e.clientX;
  track.dataset.prevPercentage = parseFloat(track.dataset.percentage) || 0;
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
};

const handleOnClick = () => {
  track.dataset.mouseDownAt = "0";
}

window.onclick = handleOnClick;

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / .5;
  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage.toString();
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  if (nextPercentage <= -5) {
    tutorial.style.opacity = "0";
  }
}

window.onwheel = e => {
  const scrollDelta = e.deltaY;
  const maxDelta = window.innerHeight / .25;
  const percentage = (scrollDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage.toString();

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  if (nextPercentage <= -5) {
    tutorial.style.opacity = "0";
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);



// Initial fade in for images

const imageTrack = document.getElementById('image-track');

function fadeInImageTrack() {
  imageTrack.classList.add('fade-in');
  console.log('Fade-in animation triggered!');
}

window.onload = fadeInImageTrack;
