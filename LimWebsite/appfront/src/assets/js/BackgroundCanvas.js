var InitCanvas = function (canvas, window) {
  let ctx = canvas.getContext('2d');
  let winW = window.innerWidth
  let winH = window.innerHeight
  canvas.width = winW
  canvas.height = winH
}

var draw = function (coordinate) {
  console.log(coordinate)
}

export  {
  InitCanvas,
  draw
}

