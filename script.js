const heartTexts = document.getElementById("heartTexts");

function heartX(t) {
    return 16 * Math.pow(Math.sin(t), 3);
}

function heartY(t) {
    return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
}
const scale = 20;
const texts = "i love you";
const repetions = 160;
const center = 300;

for (let i = 0; i < repetions; i++) {
    const t = (i / repetions) * Math.PI * 2;
    const x = heartX(t) * scale;
    const y = heartY(t) * scale;
    const delay = (i / repetions) * 4;


    const shadow = document.createElement("span");
    shadow.className = "text-shadow";
    shadow.innerText = texts;
    shadow.style.left = `${center + x}px`;
    shadow.style.top = `${center - y}px`;
    shadow.style.animationDelay = `${delay}s`;
    heartTexts.appendChild(shadow);

    const span = document.createElement("span");
    span.className = "text";
    span.innerText = texts;
    span.style.left = `${center + x}px`;
    span.style.top = `${center - y}px`;
    span.style.animationDelay = `${delay}s`;
    heartTexts.appendChild(span);
}
