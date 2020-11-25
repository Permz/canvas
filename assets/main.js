import $ from 'jquery';

var canvas = document.getElementById('task1');
var ctx = canvas.getContext('2d');

var start = (Math.PI/180) * 0
var end = (Math.PI/180) * 360

var circleRadius = 30;
var outerLineWidth = circleRadius + 1;

$(function() {
  $('[name="btn"]:radio').change( function() {
    if($('[id=a]').prop('checked')){
      $('.text').fadeOut();
      $('.text01').fadeIn();
    } else if ($('[id=b]').prop('checked')) {
      $('.text').fadeOut();
      $('.text02').fadeIn();
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