window.onload = init;

function init() {
    var canvas = document.getElementById("testCanvas");
    var context = canvas.getContext("2d");
    var r = 200;
    var bandwidth = 25;
    var count = 0;
    var arColor = ['red','blue'];

    
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