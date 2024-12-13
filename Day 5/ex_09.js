document.addEventListener("DOMContentLoaded", () => {
    const yellowSquare = document.querySelector(".ex_09 div:last-child");
    const weightDisplay = document.querySelector(".ex_09 div:nth-child(2)");

    let weight = 1; 
    const waterDensity = 1;
    const squareVolume = 10;
    const initialTop = 360;
    const sinkingFactor = 5;
    let currentTop = initialTop;
    
    yellowSquare.addEventListener("click", () => {
        weight++;
        if (weightDisplay) {
            weightDisplay.textContent = `${weight} kg`;
        }
        const buoyancyForce = squareVolume * waterDensity;
        if (weight > buoyancyForce) {
            currentTop += (weight - buoyancyForce) * sinkingFactor;
        }
        currentTop = Math.min(currentTop, 800);
        yellowSquare.style.top = `${currentTop}px`;
    });
});
