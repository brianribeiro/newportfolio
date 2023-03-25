//-----INDEX BELOW-----//

let slideIndex = 1
let showSlidesAuto = setInterval(showSlides, 4000)
showSlides(slideIndex)

//Controla as bolinhas de índice
function currentSlide(n) {
    clearInterval(showSlidesAuto)
    showSlides(slideIndex = n)
    showSlidesAuto = setInterval(showSlides, 4000)
}

//Controla os slides
function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }

    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += ' active'

    slideIndex++

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
}

//-----INDEX ABOVE-----//