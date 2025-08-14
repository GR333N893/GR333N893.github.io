let square = "";
let col = 1;
let row = 1;

for (let y=0; y<13; y++) {
    for (let x=0; x<25; x++) {
        square += "<div class=\"box\"><span class=\"marker\">" + col + "<br><br><br>" + row + "</span></div>";
        col++;
    }
    col=1;
    row++;
}

document.getElementById("lines").innerHTML = square;