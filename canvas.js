var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c = context
var c = canvas.getContext('2d');

//rectangle
c.fillStyle = 'rgba(254, 223, 78, .5)';
c.fillRect(100, 100, 100, 100);
// c.fillRect(600, 400, 200, 100);
c.fillStyle = 'rgba(80, 47, 78, .5)';
c.fillRect(200, 300, 200, 100);
// c.fillRect(900, 800, 200, 100);


// lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 150);
c.lineTo(400, 300);
c.strokeStyle = '#fa34a3';
c.stroke();


//Arcs/circle

c.arc(300, 300, 30,  )