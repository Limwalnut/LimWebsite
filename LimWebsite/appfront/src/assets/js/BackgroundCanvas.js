var InitCanvas = function (canvas, window) {
  let ctx = canvas.getContext('2d');
  let winW = window.innerWidth
  let winH = window.innerHeight
  canvas.width = winW
  canvas.height = winH
}

var draw = function (coordinateX, coordinateY, canvas, window, circleArr) {
  // console.log(coordinateX)
  var ctx = canvas.getContext('2d')
  // var circleArr = []

  function Circle(coordinateX,coordinateY,r,color){
    this.x1 = coordinateX
    this.y1 = coordinateY
    this.r1 = r
    this.color1 = color

    this.dx = Math.random()*12 -7
    this.dy = Math.random()*12 -7

    circleArr.push(this)
  }

  Circle.prototype.render = function(){
    ctx.beginPath()
    ctx.arc(this.x1,this.y1,this.r1,0,Math.PI*2,true)
    ctx.fillStyle = this.color1
    ctx.fill()
  }

  Circle.prototype.update = function () {
    this.x1 += this.dx
    this.y1 += this.dy
    this.r1--

    if (this.r1 <0){
      for (var i=0; i<circleArr.length;i++){
        if (circleArr[i] === this){
          circleArr.splice(i,1)
        }
      }
      return false
    }
    return true
  }

  window.onmousemove = function (event) {
    new Circle(event.clientX, event.clientY, 30, "red")
  }

  // console.log(circleArr)

  setInterval(function () {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    for (var i=0; i<circleArr.length;i++){
        circleArr[i].update() && circleArr[i].render()
    }
  }, 20)
  // console.log(coordinate)
}

export  {
  InitCanvas,
  draw
}

