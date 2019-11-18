function draw(x, y) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 550, 400);
    ctx.fillStyle = "rgba(247,136,47,1)";
    ctx.fillRect (x, 20, 50, 50);
    ctx.restore();
    x += 2;
    var loopTimer = setTimeout('draw('+x+','+y+')',50);

}

function circle() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'rgba(107, 122, 143, 1)';
    ctx.arc(50, 25, 20, 0 ,2 * Math.PI);
    ctx.stroke();
    ctx.fill();

}

function drawTriangle() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(100,100);
    ctx.lineTo(100,130);
    ctx.fill();
    ctx.closePath();
}
