const rgbRoll = () => Math.floor(Math.random() * 256)

function randomRGB() {
    const r = rgbRoll();
    const g = rgbRoll();
    const b = rgbRoll();
    return [r, g, b];
}


export default randomRGB;