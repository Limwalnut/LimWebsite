var pictureMove = function () {
  var moon = document.getElementById('moon')
  var rocket = document.getElementById('rocket')
  var futurePage = document.getElementById('future')
  var textContent = document.getElementsByClassName('content-container')[0]
  var rocketContainer = document.getElementsByClassName('rocket-container')[0]
  var futurePlan = document.getElementsByClassName('content-container2')[0]
  var fullStack = document.getElementById('full-stack')
  var Node = document.getElementById('Node')
  var AI = document.getElementById('AI')
  var React = document.getElementById('React')
  var Angular = document.getElementById('Angular')
  var Test = document.getElementById('Test')
  var Preprocessor = document.getElementById('Preprocessor')
  if (window.innerWidth > 650){
    futurePlan.style.fontSize = window.innerWidth/50 + 'px'
    window.addEventListener('scroll', function (e) {
      if (futurePage.offsetTop <= document.documentElement.scrollTop){
        var speedBase1 = (document.documentElement.scrollTop-futurePage.offsetTop)
        textContent.style.transform = 'translate3d( 0,' + -speedBase1/2 + 'px,0)'
        rocketContainer.style.transform = 'translate3d('+speedBase1*2 +'px,' + -speedBase1/15+ 'px,0)'
        rocket.style.transform = 'rotateZ(' + speedBase1/20 + 'deg)'
        moon.style.opacity = 1
        moon.style.transform = 'scale('+ speedBase1/480 + ")"
      }else {
        moon.style.opacity = 0
      }
      if (futurePlan.offsetTop/2+futurePage.offsetTop  <= document.documentElement.scrollTop){
        var speedBase2 = (document.documentElement.scrollTop-futurePage.offsetTop - futurePlan.offsetTop)
        fullStack.style.transform = 'translate3d( 0,' + -speedBase2 + 'px,0)'
        Node.style.transform = 'translate3d( 0,' + -speedBase2/4 + 'px,0)'
        AI.style.transform = 'translate3d( 0,' + -speedBase2/2 + 'px,0)'
        React.style.transform = 'translate3d( 0,' + -speedBase2/1.5 + 'px,0)'
        Angular.style.transform = 'translate3d( 0,' + -speedBase2*1.3 + 'px,0)'
        Test.style.transform = 'translate3d( 0,' + -speedBase2/5 + 'px,0)'
        Preprocessor.style.transform = 'translate3d( 0,' + -speedBase2 + 'px,0)'
      }
    })
  }
}
export {
  pictureMove
}

