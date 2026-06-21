//WELCOME
const welcomeScreen = document.getElementById("welcomeScreen");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("fade-out");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 900);

});
welcomeScreen.addEventListener("click", () => {
  enterBtn.click();
});

    // Grab your model viewer element
    const viewer = document.querySelector("model-viewer");
    
    // Explicitly enforce the neutral lighting setup via JS API
    viewer.addEventListener("load", () => {
        viewer.environmentImage = "neutral";
    });