document.querySelectorAll('.slider').forEach(slider => {
    const items = slider.querySelectorAll('.slider__line-item')
    const sliderLine = slider.querySelector('.slider__line')
    const sliderWrap = slider.querySelector('.slider__line-wrap')
    const sliderCount = slider.getAttribute('items-count') ? slider.getAttribute('items-count') : 1 ;

    let count = 0
    let width = 0

    function init () {
        width = sliderWrap.offsetWidth

        sliderLine.style.width = `${(width * items.length) / sliderCount}px`
        items.forEach( item => {
            item.style.width = `${width / sliderCount}px`
        })

        rollSlider()
    }

    window.addEventListener('resize', init)
    init()

    function rollSlider() {
        sliderLine.style.transform = `translate(-${count * width}px)`
    }

    slider.querySelector('.slider__btn-prev').addEventListener('click', e => {
        count--
        if (count < 0) count = (items.length / sliderCount) - 1 
        rollSlider()
    })

    slider.querySelector('.slider__btn-next').addEventListener('click', e => {
        count++
        if (count >= (items.length / sliderCount)) count = 0
        rollSlider()
    })

})