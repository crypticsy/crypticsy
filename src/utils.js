//DOM load event
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");
  
  window.addEventListener("mousemove", (e) => updateSpotlight(e));
  window.addEventListener("mousedown", (e) => {
    updateSpotlight(e);
  });
  
  window.addEventListener("mouseup", (e) => {
    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style = `background: radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%);`;
  }
});
