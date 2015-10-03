window.onload = init;

var canvas;
var context;
var r;
var count;
var arColor;

function init() {
    canvas = document.getElementById("testCanvas");
    context = canvas.getContext("2d");     
    arColor = ['red','blue'];
    drawPattern();
}

function drawPattern(){
    bandwidth = document.getElementById("bandwidth").value;
    document.getElementById("labelBW").innerHTML = "Bandwidth : " + bandwidth;
    r = 200;
    count = 0;
    while(r>=0){
        context.beginPath();
        context.arc(200, 200, r, 0, 2 * Math.PI);
        context.fillStyle = arColor[count%2];
        context.fill();
        console.log(context.fillStyle);
        r = r - bandwidth;
        count++;
        context.closePath();
    } 

}