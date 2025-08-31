// Modal elements
const modal = document.getElementById("dishModal");
const requestBtn = document.getElementById("openModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

// Open modal
requestBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // ✅ use flex, not block
});

// Close modal (Cancel or Submit)
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
submitBtn.addEventListener("click", () => {
  modal.style.display = "none";
  alert("Your request has been submitted ✅");
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


const video = document.getElementById("serviceVideo");
const playBtn = document.getElementById("playBtn");

// Toggle play/pause when clicking video or button
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
}

// Events
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// When video ends → show play button again
video.addEventListener("ended", () => {
  playBtn.style.display = "flex";
});

