var imgClick = function () {
  var imgContainer = document.getElementById('row')
  var modalImg = document.getElementById("img-big");
  var captionText = document.getElementById("caption");
  var modal = document.getElementById("myModal");
  imgContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === 'IMG') {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerHTML = e.target.alt;
    }
  })
  imgContainer.addEventListener('mouseover', function (e) {
    if (e.target.nodeName === 'IMG') {
      e.target.previousElementSibling.style.opacity = 1
    }
  })
  imgContainer.addEventListener('mouseout', function (e) {
    if (e.target.nodeName === 'IMG') {
      e.target.previousElementSibling.style.opacity = 0
    }
  })
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
}

export {
  imgClick
}
