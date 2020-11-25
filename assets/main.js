import $ from '../node_modules/jquery/dist/jquery.slim.js';

var canvas = document.getElementById('task1');
var ctx = canvas.getContext('2d');

var start = (Math.PI/180) * 0
var end = (Math.PI/180) * 360

var circleRadius = 30;
var outerLineWidth = circleRadius + 1;

$(function() {
  $('[name="name"]:radio').change( function() {
    if($('[id=create]').prop('checked')){
      // create event
      
    } else if ($('[id=select]').prop('checked')) {
      // select event
      
    } 
  });
});

canvas.addEventListener('click', ev => {
  
  var coordinateX = ev.x;
  var coordinateY = ev.y - 24;

  ctx.fillStyle = "pink";
  ctx.strokeStyle = "red";
  ctx.lineWidth = "2px";

  ctx.beginPath();
  ctx.arc(coordinateX, coordinateY, outerLineWidth, start, end);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(coordinateX, coordinateY, circleRadius, start, end);
  ctx.fill();
  ctx.closePath();
  ctx.save();

});

let checkedMode;
function checkMode() {
  if (document.modeForm.mode.checked) {
    checkedMode = document.modeForm.mode.value;
  }
};