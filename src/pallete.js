import chroma from "chroma-js";

const baseColor = '#1947ff';
const steps = 22; // Number of steps from 50 to 1050 (inclusive)
const scale = chroma.scale(['white', baseColor, 'black']).mode('lab').colors(steps);

const palette = {};
const stepValues = [0,50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050];

stepValues.forEach((step, index) => {
    palette[step] = scale[index];
});

console.log(JSON.stringify(palette, null, 2));