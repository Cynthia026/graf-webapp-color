const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

function updateColor() {
    const r = parseInt(redInput.value) || 0;
    const g = parseInt(greenInput.value) || 0;
    const b = parseInt(blueInput.value) || 0;

    // Actualiza el color del recuadro
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Convierte a hexadecimal
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    hexCode.textContent = hex;

    // Actualiza los sliders
    redSlider.value = r;
    greenSlider.value = g;
    blueSlider.value = b;
}

// Añade eventos para los sliders
redSlider.addEventListener('input', () => {
    redInput.value = redSlider.value;
    updateColor();
});
greenSlider.addEventListener('input', () => {
    greenInput.value = greenSlider.value;
    updateColor();
});
blueSlider.addEventListener('input', () => {
    blueInput.value = blueSlider.value;
    updateColor();
});

// Añade eventos para los inputs numéricos
redInput.addEventListener('input', () => {
    redSlider.value = redInput.value;
    updateColor();
});
greenInput.addEventListener('input', () => {
    greenSlider.value = greenInput.value;
    updateColor();
});
blueInput.addEventListener('input', () => {
    blueSlider.value = blueInput.value;
    updateColor();
});

// Inicializa el color al cargar
updateColor();