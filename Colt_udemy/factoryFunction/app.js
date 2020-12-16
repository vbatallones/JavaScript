
const makeColor = (r, g, b) => {
    color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color
}

const myColor = makeColor(255,45,100)

