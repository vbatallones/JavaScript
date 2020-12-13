class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRGB() {
        const { r, g, b } = this // Destructuring
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        const rgb = this.innerRGB()
        return `rgb(${rgb})`
    }
    rgba(a=1.0) {
        const rgb = this.innerRGB()
        return `rgba(${rgb}, ${a})`
    }
    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const color1 = new Color(180, 255, 100)