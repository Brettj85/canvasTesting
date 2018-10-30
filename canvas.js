var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c = context
var c = canvas.getContext('2d');

//rectangle
// c.fillStyle = 'rgba(254, 223, 78, .5)';
// c.fillRect(100, 100, 100, 100);
// c.fillRect(600, 400, 200, 100);
// c.fillStyle = 'rgba(80, 47, 78, .5)';
// c.fillRect(200, 300, 100, 100);
// c.fillRect(900, 800, 200, 100);
// c.fillStyle = 'rgba(0, 0, 255, .5)';
// c.fillRect(400, 200, 100, 100);


// lines
// c.beginPath();
// c.moveTo(50, 300);
// c.strokeStyle = 'rgba(0,0,255,.5)';
// c.lineTo(300, 150);
// c.lineTo(400, 300);
// c.lineTo(900, 400);
// c.lineTo(50, 300);
// // c.strokeStyle = '#fa34a3';
// c.stroke();


//Arcs/circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

//multiple

// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

//random
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius;

var colorArray = [
    'rgba(255, 0, 0, .8)',
    'rgba(0, 255, 0, .8)',
    'rgba(0, 0, 255, .8)',
    'rgba(255, 255, 0, .8)',
    'rgba(0, 255, 255, .8)'
]

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if (this.radius < maxRadius){
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 200; i++) {
    var radius = Math.random() * 10 + 1;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();