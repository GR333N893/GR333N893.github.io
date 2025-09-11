function frame() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var ph = h/5;
    const canvas = document.getElementById("screen");
    const ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    const player = document.getElementById("player");
    ctx.drawImage(player, (w/2)-(ph/4), (h/2), (ph/2), ph);
}

setInterval(frame, 500);