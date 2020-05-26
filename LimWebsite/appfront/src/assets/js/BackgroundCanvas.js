var mouse_pos_x = 0
var mouse_pos_y = 0
var body = [];
var red = [];
var grn = [];
var blu = [];
var canvas, window
var delta = 1;
var step = 0;
var loop = 0;
var line = 0;
var lineMax = 20;
var lineMin = 5;
var TWO_PI = 2 * Math.PI;
var t = 0;
var op = 1;
var bodyLength = 20;


var InitCanvas = function (canvas1, window1) {
  let winW = window1.innerWidth
  let winH = window1.innerHeight
  canvas1.width = winW
  canvas1.height = winH
  mouse_pos_x = canvas1.width/2;
  mouse_pos_y = canvas1.height/2;
  canvas = canvas1
  window = window1
}



function mouse_track(event) {
  // animate = false;
  if((Math.abs(mouse_pos_x - event.clientX) > delta) || (Math.abs(mouse_pos_y - event.clientY) > delta)){
    mouse_pos_x = event.clientX-8;
    mouse_pos_y = event.clientY-8+window.scrollY;
  }
}

var draw = function (){
  if (body.length <= bodyLength){
    body.push([mouse_pos_x,mouse_pos_y])
  }else {
    for (var i=body.length-1; i>0; i--){
      body[i][0] = body[i-1][0]
      body[i][1] = body[i-1][1]
    }
    body[0][0] = mouse_pos_x
    body[0][1] = mouse_pos_y
  }

  t += 0.08;
  t = t % TWO_PI;

  if(line <= lineMin){
    op = 1;
    line = lineMin+1;
  }
  if(line >= lineMax){
    op = -1;
    line = lineMax-1;
  }
  loop++;
  if(loop === 5){
    step++;
    step = step % bodyLength;
    loop = 0;
  }
  line = op + line;

  var center = 128;
  var width = 127;

  for (var s = 0; s < bodyLength; s++) {
    red[s] = Math.round(Math.sin(0.3*s) * width + center);
    grn[s] = Math.round(Math.sin(0.3*s + 2) * width + center);
    blu[s] = Math.round(Math.sin(0.3*s + 4) * width + center);
  }
  // console.log(body)
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
  window.onmousemove = function(event) {
    mouse_track(event)
  }
    ctx.lineWidth =line
    ctx.strokeStyle = "rgb("+red[step]+","+grn[step]+","+blu[step]+")";
    ctx.fillStyle = "rgb("+red[step]+","+grn[step]+","+blu[step]+")";
    ctx.beginPath();
    ctx.arc(body[0][0], body[0][1], 6, 0, TWO_PI);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(body[0][0], body[0][1]);

    for (var s = 0; s < body.length - 2; s++) {

      //Bezier curve along points taken from:
      var xc = (body[s][0] + body[s + 1][0]) / 2;
      var yc = (body[s][1] + body[s + 1][1]) / 2;
      ctx.quadraticCurveTo(body[s][0], body[s][1], xc, yc);
    }

    ctx.stroke();
    //Draw trailing circle
    ctx.beginPath();
    ctx.arc(xc, yc, line / 2, 0, TWO_PI);
    ctx.fill();

    requestAnimationFrame(draw)
}

export  {
  InitCanvas,
  draw,
}

