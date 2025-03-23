let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});
