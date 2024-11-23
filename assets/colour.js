const button = document.querySelector(".btn");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = hexToColorName(randomColor);
});

function generateRandomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hexToColorName(hex) {
    const colors = {
        "#FFFFFF": "White",
        "#000000": "Black",
        "#FF0000": "Red",
        "#00FF00": "Lime",
        "#0000FF": "Blue",
        "#FFFF00": "Yellow",
        "#FFA500": "Orange",
        "#800080": "Purple",
        "#FFC0CB": "Pink",
        "#A52A2A": "Brown",
        "#008000": "Green",
        "#FFFFE0": "LightYellow",
        "#F0E68C": "Khaki",
        "#D3D3D3": "LightGray",
        "#C0C0C0": "Silver",
        "#000080": "Navy",
        "#FFD700": "Gold",
        "#808080": "Gray",
        "#F8F8FF": "GhostWhite",
        "#00FFFF": "Aqua",
        "#FF1493": "DeepPink",
        "#F0F8FF": "AliceBlue",
        "#B0E0E6": "PowderBlue",
        "#FF6347": "Tomato",
        "#98FB98": "PaleGreen",
        "#D2691E": "Chocolate",
        "#2E8B57": "SeaGreen",
        "#ADD8E6": "LightBlue",
        "#B22222": "FireBrick",
        "#F4A460": "SandyBrown"
    };

    return colors[hex.toUpperCase()] || "Unknown Color";
}
