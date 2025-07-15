let score = 0;
const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tap-button");

tapButton.addEventListener("click", () => {
  score += 1;
  scoreDisplay.textContent = score;
  
  // انیمیشن سریع هنگام کلیک
  tapButton.style.transform = "scale(0.95)";
  setTimeout(() => {
    tapButton.style.transform = "scale(1)";
  }, 100);
});
