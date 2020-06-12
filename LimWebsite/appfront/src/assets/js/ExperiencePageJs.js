var pageHeight = document.documentElement.clientHeight
var pageWidth = document.documentElement.clientWidth
var scrollHorizontal = 0
var topHeight = 2 * pageHeight + 50
var bottomHeight = 4 * pageHeight + 50
var horizontalSection
var sectionHeight = 0
var sectionWidth = 0
var scrollTop = 0

function horizontalScroll () {
  scrollTop = document.documentElement.scrollTop
  horizontalSection = document.getElementById('wrap')
  sectionHeight = document.getElementById('experience').offsetHeight
  sectionWidth = horizontalSection.offsetWidth
  if (scrollTop >= topHeight && scrollTop < bottomHeight) {
    scrollHorizontal = ((scrollTop - (topHeight)) / sectionHeight) * sectionWidth
    horizontalSection.style.transform = 'translate3d(' + (-scrollHorizontal) + 'px,' + (scrollTop - (topHeight)) + 'px, 0)'
  } else if (scrollTop < topHeight) {
    horizontalSection.style.transform = 'translateY(0)'
  } else if (scrollTop >= bottomHeight) {
    if (pageWidth <= 532) {
      horizontalSection.style.transform = 'translate3d(' + (-sectionWidth + window.innerWidth) + 'px,' + (sectionHeight - pageHeight) + 'px,0)'
    } else {
      horizontalSection.style.transform = 'translate3d(' + (-sectionWidth + pageWidth - 17) + 'px,' + (sectionHeight - pageHeight) + 'px,0)'
    }
  }
}

export {
  horizontalScroll
}
