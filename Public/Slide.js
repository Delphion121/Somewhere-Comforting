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

const handleOnMove = (e, scrollAmount) => {
  const prevPercentage = parseFloat(track.dataset.percentage) || 0;
  const nextPercentageUnconstrained = prevPercentage + scrollAmount;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage.toString();
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  if (nextPercentage <= -5) {
    tutorial.style.opacity = "0";
  }
};

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / .25;
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
};

window.onwheel = e => {
  e.preventDefault();
  const scrollAmount = e.deltaY > 0 ? -1 : 1;
  handleOnMove(e, scrollAmount);
};

window.ontouchmove = e => {
  e.preventDefault();
  const scrollAmount = e.touches[0].clientY > track.dataset.mouseDownAt ? -3 : 3;
  handleOnMove(e, scrollAmount);
};




// Initial fade in for images

const imageTrack = document.getElementById('image-track');

function fadeInImageTrack() {
  imageTrack.classList.add('fade-in');
  console.log('Fade-in animation triggered!');
}

window.onload = fadeInImageTrack;
