var canvas = document.querySelector("canvas");

canvas.width = 600;
canvas.height = 400;

var ctx = canvas.getContext('2d');

var start = (Math.PI/180) * 0
var end = (Math.PI/180) * 360

var circleRadius = 30;
var outerLineWidth = circleRadius + 1;

canvas.addEventListener('click', function(ev){
  
  var coordinateX = ev.x;
  var coordinateY = ev.y;

  ctx.fillStyle = "pink";
  ctx.strokeStyle = "red";
  ctx.lineWidth = "2px";

  ctx.beginPath();
  ctx.arc(coordinateX, coordinateY, outerLineWidth, start, end);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(coordinateX, coordinateY, circleRadius, start, end);
  ctx.fill();
  ctx.save();

});
